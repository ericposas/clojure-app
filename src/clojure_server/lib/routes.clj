(ns clojure-server.lib.routes
  (:require
   [clojure-server.lib.api :as api])
  (:gen-class))

(defn list-characters
  "Get list of Smash characters"
  [_]
  (let [result (api/get-characters)]
    {:status 200
     :headers {"Content-Type" "application/json"}
     :body result}))

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

(defn update-move-description
  "Update a move's descriptive text"
  [req]
  (let [result (api/update-move-description req)]
    {:status 200
     :headers {"content-type" "application/json"}
     :body result}))

(defn update-move-damage
  "Update a move's damage info"
  [req]
  (let [result (api/update-move-damage req)]
    {:status 200
     :headers {"content-type" "application/json"}
     :body result}))

(defn update-move-knockback
  "Update a move's knockback info"
  [req]
  (let [result (api/update-move-knockback req)]
    {:status 200
     :headers {"content-type" "application/json"}
     :body result}))

(defn create-move
  "Create a new move"
  [req]
  (let [result (api/create-move req)]
    {:status 200
     :headers {"content-type" "application/json"}
     :body result}))

(defn update-image
  "Update an image src for a character"
  [req]
  (let [result (api/update-character-image req)]
    {:status 200
     :headers {"content-type" "application/json"}
     :body result}))

(defn add-move-attribute
  "Adds an attack attribute to an existing move"
  [req]
  (let [result (api/add-move-attribute req)]
    {:status 200
     :headers {"content-type" "application/json"}
     :body result}))

(defn get-attributes
  "Get all attack attribute types"
  [_]
  (let [result (api/get-all-attack-attributes)]
    {:status 200
     :headers {"content-type" "application/json"}
     :body result}))
