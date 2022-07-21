#!/bin/bash

docker exec -it local_pgdb psql -U admin -c "CREATE DATABASE smashbros;";
docker exec -it local_pgdb psql -U admin -c "GRANT ALL PRIVILEGES ON DATABASE smashbros TO admin;";
cat dump_smashbros.sql | docker exec -i local_pgdb psql -U admin -d smashbros
