(ns clojure-server.lib.api
  (:require
   [dotenv :refer [env app-env]]
   [ring.util.response :refer [response]]
   [compojure.core :refer :all]
   [compojure.route :as route]
   [clojure.pprint :as pp]
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
  (jdbc/query db-connection [(str "
    select characters.name, abilities.abilities
    from characters
    join abilities on abilities.character_id = characters.id")]))

(defn insert-character
  "Insert a character; If abilities are provided, insert those into 'abilities' table"
  [req]
  (let [name (get-key req "name")
        abilities (get-key req "abilities")]
    (if (some? abilities)
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
                          commit transaction;")
                     name name abilities name]))
      (do
        (jdbc/query db-connection
                    [(str "insert into characters (name) values (?)")
                     name])))))
