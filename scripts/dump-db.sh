#!/bin/bash

docker exec -t local_pgdb pg_dumpall -c -U admin > dump_smashbros.sql
