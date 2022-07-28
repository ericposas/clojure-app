(ns clojure-server.lib.api
  (:require
   [dotenv :refer [env]]
   [clojure.data.json :as json]
   [clojure.java.jdbc :as jdbc])
  (:gen-class))

(def db-connection
  {:dbtype "postgresql"
   :dbname (env :DB_NAME)
   :host (env :DB_HOST)
   :user (env :DB_USER)
   :password (env :DB_PASS)})

;-- general functions

(defn get-key
  "Parses JSON, get key value"
  [req key]
  ((keyword key) (json/read-str (str (:body req)) :key-fn keyword)))

(defn get-moves-list
  "Get moves list from the database"
  [name]
  (jdbc/query db-connection [(str "
    select
    characters.name,
    moves.name as \"move name\",
    moves.description as \"move description\",
    moves.damage, moves.knockback,
    string_agg(attributes.type, ', ' order by type) as \"attack attributes\"
    from characters_moves
    join characters on characters.id = character_id
    join moves on moves.id = move_id
    left join attributes_group on attributes_group.move_id = moves.id
    left join attributes on attributes.id = attributes_group.attribute_id
    where characters.name = ?
    group by characters.name, moves.name, moves.description,
    moves.damage, moves.knockback;")
                             name]))

(defn get-mapped-moves-list
  "Returns the move list with only the values we want returned"
  [move]
  {(keyword "move name") ((keyword "move name") move)
   (keyword "move description") ((keyword "move description") move)
   :damage (:damage move)
   :knockback (:knockback move)
   (keyword "attack attributes") ((keyword "attack attributes") move)})

;-- called from API endpoints

(defn get-characters
  "Retrieve a list of Smash characters"
  []
  (let [result (jdbc/query db-connection [(str "
    select c.name, i.url
    from characters c
    join images i on i.character_id = c.id
    order by c.name asc;")])]
    (map
     (fn
       [char]
       {:name (:name char)
        :abilities (map
                    get-mapped-moves-list
                    (get-moves-list (:name char)))
        :url (:url char)}) result)))

(defn get-character-moves
  "Get detailed moveset data from a specific character"
  [req]
  (let [name (get-key req "name")
        result (get-moves-list name)]
    (if (some? name)
      {(keyword name)
       (map get-mapped-moves-list result)}
      (str "Provide the character name to look up the moveset"))))

(defn update-move-description
  "Update a special move"
  [req]
  (let [move (get-key req "move")
        description (get-key req "description")]
    (if (some? (and move description))
      (jdbc/query db-connection [(str "
        update moves
        set description = ?
        where name = ?;")
                                 description
                                 move])

      (str "Provide \"move\" name and \"description\" keys"))))

(defn update-move-damage
  "Update a special move"
  [req]
  (let [move (get-key req "move")
        damage (get-key req "damage")]
    (if (and move damage)
      (jdbc/query db-connection [(str "
        update moves
        set damage = ?
        where name = ?;")
                                 damage
                                 move])

      (str "Provide \"move\" name and \"damage\" keys"))))

(defn update-move-knockback
  "Update a special move"
  [req]
  (let [move (get-key req "move")
        knockback (get-key req "knockback")]
    (if (and move knockback)
      (jdbc/query db-connection [(str "
        update moves
        set knockback = ?
        where name = ?;")
                                 knockback
                                 move])

      (str "Provide \"move\" name and \"knockback\" keys"))))

(defn create-move
  "Create a new move and associate it with a character"
  [req]
  (let [character (get-key req "character")
        move (get-key req "move")
        description (get-key req "description")
        damage (get-key req "damage")
        knockback (get-key req "knockback")]
    (if (some? (and
                move
                description
                character
                knockback
                damage))
      (jdbc/query db-connection [(str "
         start transaction;
                                       
         insert into moves (name, description)
         values (?, ?);

         insert into characters_moves
         select
          (select max(id) + 1
           from characters_moves) as id,
          (select id from characters
           where name = ?) as character_id,
          (select ?) as damage,
          (select ?) as knockback,
          (select id from moves
           where name = ?
           limit 1) as move_id;
                                       
        commit transaction;")
                                 move
                                 description
                                 character
                                 damage
                                 knockback
                                 move])
      (str "Provide character, move, description, damage, and knockback values. Also be sure that you have added the character previously."))))

(defn insert-character
  "Insert a character"
  [req]
  (let [name (get-key req "name")
        url (get-key req "url")]
    (if (some? url)
      (jdbc/query db-connection
                  [(str "start transaction;
                         
                          insert into characters (name) values (?);
                          
                          insert into images (character_id)
                          select id from characters
                          where name = ?;
                          
                          update images
                          set url = ?
                          where character_id = (select id from characters
                                                where name = ?
                                                limit 1);
                          commit transaction;")
                   name name
                   url name])
      (str "Provide character name and url (string)"))))

(defn update-character-image
  "Updates a character image url"
  [req]
  (let [name (get-key req "name")
        url (get-key req "url")]
    (if (some? (and name url))
      (jdbc/query db-connection
                  [(str "update images
                         set url = ?
                         where character_id = (select id from characters
                                       where name = ?)")
                   url
                   name])
      (str "Provide the character name and url to update the image with"))))

(defn add-move-attribute
  "Adds an attack attribute to a move"
  [req]
  (let [move (get-key req "move")
        attribute (get-key req "attribute")]
    (if (some? (and move attribute))
      (jdbc/query db-connection
                  [(str "
                   -- create new entry in attributes_group for a move id
                   start transaction;
                   
                   insert into attributes_group (move_id, attribute_id)
                   select
                  	(select id from moves where name = ?) as move_id,
	                  (select id from attributes where type = ?) as attribute_id;

                   -- set the attributes_group_id to the correct move
                   update moves
                   set attributes_group_id = (select id from attributes_group where move_id = (select id where name = 'Falcon Punch'))
                   where id = (select id from moves where name = ?);
                  
                   commit transaction;
                   ")
                   move
                   attribute
                   move])
      (str "Provide the move to update and the attribute type to update it with"))))

(defn get-all-attack-attributes
  "Gets all attack attribute types and descriptions"
  []
  (jdbc/query db-connection
              [(str "select * from attributes
                     order by id asc;")]))