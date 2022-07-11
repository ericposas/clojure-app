(defproject clojure_server "0.1.0"
  :description "A Smash Bros REST API in Clojure"
  :url "https://innovationgroup.tech"
  :license {:name "MIT"
            :url ""}
  :dependencies [[org.clojure/clojure "1.10.0"]
                 [org.clojure/data.json "0.2.6"]
                 [org.clojure/java.jdbc "0.7.12"]
                 [org.postgresql/postgresql "42.4.0"]
                 [org.postgresql/postgresql "42.1.4"]
                 [cheshire "5.11.0"]
                 [ring/ring-defaults "0.3.2"]
                 [ring/ring-devel "1.6.3"]
                 [ring/ring-json "0.5.0"]
                 [compojure "1.6.1"]
                 [http-kit "2.3.0"]
                 [lynxeyes/dotenv "1.0.2"]]
  :main ^:skip-aot clojure-example.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}
             :dev {:main clojure-server.core/-main}})
            