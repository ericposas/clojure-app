(ns clojure-server.lib.routes
  (:require
   [ring.util.response :refer [response]]
   [clojure.java.jdbc :as jdbc]
   [compojure.core :refer :all]
   [compojure.route :as route]
   [clojure.pprint :as pp]
   [clojure.string :as str]
   [cheshire.core :as cheshire]
   [clojure.data.json :as json]
   [clojure-server.lib.api :as api])
  (:gen-class))

(defn characters
  "Get list of Smash characters"
  [req]
  {:status 200
   :headers {"Content-Type" "application/json"}
   :body (let [chars-result (api/get-characters)]
           (map (fn
                  [char]
                  (let [abilities-coll (clojure.string/split (:abilities char) #",")
                        abilities-trimmed-entries (map
                                                   #(clojure.string/trim %)
                                                   abilities-coll)]
                    {:name (:name char)
                     :abilities abilities-trimmed-entries}))
                chars-result))})

(defn post-character
  "Post a Smash character to the database"
  [req]
  (let [name (:name (:body req))
        abilities (:abilities (:body req))
        result (api/insert-character name abilities)]

    {:status 200
     :headers {"content-type" "application/json"}
     :body (if (some? result) result "Inserted character data")}))
