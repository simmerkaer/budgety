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
    app.listen(4000, () => {
      console.log("express server started");
    });
  });
})();

// createConnection().then(async connection => {

// console.log("Inserting a new user into the database...");
// const user = new User();
// user.firstName = "Timber";
// user.lastName = "Saw";
// user.age = 25;
// await connection.manager.save(user);
// console.log("Saved a new user with id: " + user.id);

// console.log("Loading users from the database...");
// const users = await connection.manager.find(User);
// console.log("Loaded users: ", users);

// console.log("Here you can setup and run express/koa/any other framework.");

// }).catch(error => console.log(error));
