import { ApolloServer } from "apollo-server-express";
import express from "express";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import { UserResolver } from "./resolvers";

(async () => {
  // tslint:disable-next-line: typedef
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver],
    }),
  });

  // tslint:disable-next-line: typedef
  const app = express();
  apolloServer.start().then(async (_) => {
    apolloServer.applyMiddleware({ app });

    await createConnection();
    app.get("/", (_req, res) => res.send("hello"));
    app.listen(process.env.TYPEORM_PORT, () => {
      console.log("express server started");
    });
  });
})();
