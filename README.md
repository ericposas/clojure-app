# Development
- Install https://marketplace.visualstudio.com/items?itemName=pucelle.run-on-save
- Run on Save to run `docker restart clojure-app` on each save
- In Settings.json
```
"emeraldwalk.runonsave": {
  "commands": [
    {
        "match": ".clj",
        "isAsync": true,
        "cmd": "docker restart clojure-app"
    },
  ]
}
```

# Database Dump
- `docker exec -t local_pgdb pg_dumpall -c -U admin > dump_smashbros.sql`

# Create DB
- `docker exec -it postgresql-master psql -U postgres -c CREATE DATABASE smashbros; GRANT ALL PRIVILEGES ON DATABASE smashbros TO admin;`

# Database Restore
- `cat dump_smashbros.sql | docker exec -i local_pgdb psql -U admin -d smashbros`

