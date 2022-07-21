(ns clojure-server.lib.routes
  (:require
   [ring.util.response :refer [response]]
   [clojure.java.jdbc :as jdbc]
   [compojure.core :refer :all]
   [compojure.route :as route]
   [clojure.pprint :as pp]
   [clojure.string :as str]
   [cheshire.core :as cheshire :refer :all]
   [clojure.data.json :as json]
   [clojure-server.lib.api :as api])
  (:gen-class))

(defn characters
  "Get list of Smash characters"
  [req]
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
     :body {:data result}}))
