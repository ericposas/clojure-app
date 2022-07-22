(ns clojure-server.lib.routes
  (:require
   [clojure-server.lib.api :as api])
  (:gen-class))

(defn characters
  "Get list of Smash characters"
  [_]
  {:status 200
   :headers {"Content-Type" "application/json"}
   :body (let [chars-result (api/get-characters)]
           chars-result)})

(defn post-character
  "Post a Smash character to the database"
  [req]
  (let [result (api/insert-character req)]
    {:status 200
     :headers {"content-type" "application/json"}
     :body result}))

(defn get-character-moves
  "Get detailed data about a character's moveset"
  [req]
  (let [result (api/get-character-moves req)]
    {:status 200
     :headers {"content-type" "application/json"}
     :body result}))

(defn update-character-abilities
  "Put/Update a Smash character's abilities in the the database"
  [req]
  (let [result (api/update-character-abilities-by-name req)]
    {:status 200
     :headers {"content-type" "application/json"}
     :body result}))
