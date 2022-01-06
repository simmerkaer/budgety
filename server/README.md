# apollo-graphql-demo

Demo for trying out Apollo Server and GraphQL

Created following this following video by Ben Awad

https://www.youtube.com/watch?v=25GS0MLT8JU

## How to run

### PostgresQL

Setup PostgresQL in Docker (todo: setup docker compose)

```
docker run -d --name dev-postgres -e POSTGRES_PASSWORD=Pass2020! -v c:/users/sim/documents/postgres-data/:/var/lib/postgresql/data -p 5432:5432 postgres
```

### pqAdmin

Setup pqAdmin in Docker

```
docker run -p 80:80 -e 'PGADMIN_DEFAULT_EMAIL=user@domain.local' -e 'PGADMIN_DEFAULT_PASSWORD=SuperSecret' --name dev-pgadmin -d dpage/pgadmin4
```

Go to http://localhost:80 and login using user@domain.local and SuperSecret

Connect to server using 172.17.0.2 as hostname and postgres/Pass2020! for username/password

### GraphQL server

Start typescript compile in watch mode by running

```
yarn watch
```

Then start the node server by running

```
yarn start
```

The api can then be accessed at http://localhost:3000

Note that the port can vary depending on what the ENV variable PORT has been set to.
