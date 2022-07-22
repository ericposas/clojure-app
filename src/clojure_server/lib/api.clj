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

;; (defn update-character-abilities-by-name
;;   "Update a character's list of abilities"
;;   [req]
;;   (let [name (get-key req "name")
;;         abilities (get-key req "abilities")]
;;     (if (some? abilities)
;;       (jdbc/query db-connection
;;                   [(str
;;                     "update abilities
;;                      set abilities = ?
;;                      where character_id = (select id from characters
;;                                            where name = ?
;;                                            limit 1);")
;;                    abilities
;;                    name])
;;       (str "Updated abilities for " name))))

(defn create-move
  "Create a new move and associate it with a character"
  [req]
  (let [character-name (get-key req "character-name")
        move-name (get-key req "move-name")
        description (get-key req "description")]
    (if (some? (and move-name description character-name))
      (jdbc/query db-connection [(str "
        -- move-name, move-description, move-name, character-name
                                       
        start transaction;
        
        insert into moves (name, description)
        values (?, ?);

        with

        autoinc as (select 1 as id, 0 as character_id, 0 as move_id
        from characters_moves),

        _moves as (select 1 as id, id as move_id, 0 as character_id
        from moves where name = ?),

        _chars as (select 1 as id, 0 as move_id, id as character_id
        from characters where name = ?),

        complexquery as (select m.move_id, c.character_id
        from _moves m
        join _chars c on c.move_id = m.character_id)

        insert into characters_moves
        select (select max(id) + 1 from characters_moves) as id, character_id, move_id
        from complexquery;

        commit;")
                                 move-name
                                 description
                                 move-name
                                 character-name])
      (str "Provide a character-name, move-name, and description keys"))))


;-- alter this
;-- need to now insert abilities/moves into character_moves, and moves tables,
; linking it to the character(s)
;-- probably needs to be two separate processes;
; a. create a character by name
; and b. post abilities, attaching them to a character

(defn insert-character
  "Insert a character"
  [req]
  (let [name (get-key req "name")
        abilities (get-key req "abilities")
        url (get-key req "url")]
    (if (some? (and abilities url))
      (do
        (jdbc/query db-connection
                    [(str "start transaction;
                          insert into characters (name) values (?);
                          insert into abilities (character_id)
                          select id from characters
                          where name = ?;
                          update abilities
                          set abilities = ?
                          where character_id = (select id from characters
                                                where name = ?
                                                limit 1);
                          insert into images (character_id)
                          select id from characters
                          where name = ?;
                          update images
                          set url = ?
                          where character_id = (select id from characters
                                                where name = ?
                                                limit 1);
                          commit transaction;")
                     name
                     name abilities name
                     name url name])
        (str "Character and associated data created."))
      (str "Provide character name, abilities (string), and url (string)"))))
