(ns clojure-server.core
  (:require
   [dotenv :refer [env app-env]]
   [compojure.core :refer :all]
   [compojure.route :as route]
   [org.httpkit.server :as server]
   [ring.middleware.json :as js :refer [wrap-json-body]]
   [ring.middleware.defaults :refer :all]
   [ring.middleware.reload :refer [wrap-reload]]
   [clojure.pprint :as pp]
   [clojure.string :as str]
   [clojure.data.json :as json]
   [clojure-server.lib.routes :as routes])
  (:gen-class))

(defroutes app-routes
  (GET "/characters" [] routes/characters)
  (POST "/characters" [] routes/post-character))

(defn -main
  "Production"
  [& args]
  (let [port (Integer/parseInt (env :PORT))]
    (server/run-server
     (js/wrap-json-body
      (js/wrap-json-response app-routes {:keywords? true})) {:port port})
    (println (str "Running webserver at http:/127.0.0.1:" port "/"))))
