#!/bin/bash

FILE=$1

docker exec -it local_pgdb-clojure-app psql -U admin -c "CREATE DATABASE smashbros;";
docker exec -it local_pgdb-clojure-app psql -U admin -c "GRANT ALL PRIVILEGES ON DATABASE smashbros TO admin;";
cat $FILE | docker exec -i local_pgdb-clojure-app psql -U admin -d smashbros
