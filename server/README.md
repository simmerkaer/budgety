# apollo-graphql-demo

Demo for trying out Apollo Server and GraphQL

Created following this following video by Ben Awad

https://www.youtube.com/watch?v=25GS0MLT8JU

# How to run

Setup PostgresQL in Docker (todo: setup docker compose)

```
docker run -d --name dev-postgres -e POSTGRES_PASSWORD=Pass2020! -v c:/users/sim/documents/postgres-data/:/var/lib/postgresql/data -p 5432:5432 postgres
```

Setup pqAdmin in Docker

```
docker run -p 80:80 -e 'PGADMIN_DEFAULT_EMAIL=user@domain.local' -e 'PGADMIN_DEFAULT_PASSWORD=SuperSecret' --name dev-pgadmin -d dpage/pgadmin4
```

Go to http://localhost:80 and login using user@domain.local and Supersecret

Connect to server using 172.17.0.2 as hostname and postgres/Pass2020! for username/password
