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

(defn get-key
  "Parses JSON, get key value"
  [req key]
  ((keyword key) (json/read-str (str (:body req)) :key-fn keyword)))

(defn get-characters
  "Retrieve a list of Smash characters"
  []
  (let [result (jdbc/query db-connection [(str "
    select c.name, a.abilities, i.url
    from characters c
    join abilities a on a.character_id = c.id
    join images i on i.character_id = c.id
    order by c.name asc;")])]
    (map
     (fn
       [char]
       (let [abilities-coll (clojure.string/split (:abilities char) #",")
             abilities-trimmed-entries (map
                                        #(clojure.string/trim %)
                                        abilities-coll)]
         {:name (:name char)
          :abilities abilities-trimmed-entries
          :url (:url char)})) result)))

(defn get-character-moves
  "Get detailed moveset data from a specific character"
  [req]
  (let [name (get-key req "name")
        result (jdbc/query db-connection [(str "
    select characters.name as character_name,
    moves.name as name, moves.description as description,
    moves.damage as damage, moves.knockback as knockback
    from characters_moves
    join characters on characters.id = character_id
    join moves on moves.id = move_id
    where characters.name = ?")
                                          name])]

    (if (some? name)
      {(keyword name)
       (map (fn [move]
              {:special (:name move)
               :description (:description move)
               :damage (:damage move)
               :knockback (:knockback move)}) result)}
      (str "Provide the character name to look up the moveset"))))

(defn update-character-abilities-by-name
  "Update a character's list of abilities"
  [req]
  (let [name (get-key req "name")
        abilities (get-key req "abilities")]
    (if (some? abilities)
      (jdbc/query db-connection
                  [(str
                    "update abilities
                     set abilities = ?
                     where character_id = (select id from characters
                                           where name = ?
                                           limit 1);")
                   abilities
                   name])
      (str "Updated abilities for " name))))

(defn insert-character
  "Insert a character; If abilities are provided, insert those into 'abilities' table"
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
