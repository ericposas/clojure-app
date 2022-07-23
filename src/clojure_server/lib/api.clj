(ns clojure-server.lib.api
  (:require
   [dotenv :refer [env]]
   [clojure.string :as str]
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
    select characters.name as character_name,
    moves.name as name, moves.description as description,
    moves.damage as damage, moves.knockback as knockback
    from characters_moves
    join characters on characters.id = character_id
    join moves on moves.id = move_id
    where characters.name = ?")
                             name]))

(defn get-mapped-moves-list
  "Returns the move list with only the values we want returned"
  [move]
  {:special (:name move)
   :description (:description move)
   :damage (:damage move)
   :knockback (:knockback move)})

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

(defn create-move
  "Create a new move and associate it with a character"
  [req]
  (let [character-name (get-key req "character-name")
        move-name (get-key req "move-name")
        description (get-key req "description")]
    (if (some? (and
                move-name description character-name))
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
          (select id from moves
           where name = ?
           limit 1) as move_id;
                                       
        commit transaction;")
                                 move-name
                                 description
                                 character-name
                                 move-name])
      (str "Provide character-name, move-name, description. Also be sure that you have added the character previously."))))

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
