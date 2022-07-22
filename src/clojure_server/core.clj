(ns clojure-server.core
  (:require
   [dotenv :refer [env]]
   [compojure.core :refer [GET POST PUT defroutes]]
   [org.httpkit.server :as server]
   [ring.middleware.json :refer [wrap-json-body wrap-json-response]]
   [ring.middleware.defaults :refer :all]
   [clojure-server.lib.routes :as routes])
  (:gen-class))

(defroutes app-routes
  (GET "/characters" [] routes/characters)
  (GET "/character-moves" [] routes/get-character-moves)
  (POST "/characters" [] routes/post-character)
  (POST "/moves" [] routes/create-move)
  (PUT "/images" [] routes/update-image))

(defn -main
  "Production"
  [& _]
  (let [port (Integer/parseInt (env :PORT))]
    (server/run-server
     (wrap-json-body
      (wrap-json-response app-routes {:keywords? true})) {:port port})
    (println (str "Running webserver at http:/127.0.0.1:" port "/"))))
