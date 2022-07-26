(ns clojure-server.core
  (:require
   [dotenv :refer [env]]
   [compojure.core :refer [GET POST PUT defroutes]]
   [org.httpkit.server :as server]
   [ring.middleware.json :refer [wrap-json-body wrap-json-response]]
   [ring.middleware.defaults :refer :all]
   [clojure-server.lib.routes :as routes]
   [compojure.route :as route])
  (:gen-class))

(def root (str (System/getProperty "user.dir") "/public"))

(defroutes app-routes
  (route/files "/" (do (println root) {:root root}))
  (route/resources "/")
  (GET "/characters" [] routes/list-characters)
  (POST "/characters" [] routes/post-character)
  (GET "/moves" [] routes/get-character-moves)
  (PUT "/moves" [] routes/update-character-move)
  (POST "/moves" [] routes/create-move) ;character-name, move-name, description
  (PUT "/images" [] routes/update-image)
  (POST "/moves/attack-attributes" [] routes/add-move-attribute)
  (GET "/moves/attack-attributes" [] routes/get-attributes))

(defn -main
  "Production"
  [& _]
  (let [port (Integer/parseInt (env :PORT))]
    (server/run-server
     (wrap-json-body
      (wrap-json-response app-routes {:keywords? true})) {:port port})
    (println (str "Running webserver at http:/127.0.0.1:" port "/"))))
