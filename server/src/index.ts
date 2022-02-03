import { ApolloServer } from "apollo-server-express";
import express from "express";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import { UserResolver } from "./UserResolver";
import "dotenv/config";
import session from "express-session";
import store from "connect-pg-simple";
import cors from "cors";

declare module "express-session" {
  interface SessionData {
    userId: number;
  }
}

(async () => {
  const pqSessionConnection = {
    user: "postgres",
    password: "postgres",
    host: "localhost", // or whatever it may be
    port: 5432,
  };
  const pgStore = store(session);
  const app = express();
  app.use(
    cors({
      origin: ["http://localhost:3000", "https://studio.apollographql.com"],
      credentials: true,
    })
  );
  app.use(
    session({
      name: "qid",
      secret: "cookieSecret",
      resave: false,
      saveUninitialized: false,
      store: new pgStore({
        createTableIfMissing: true,
        conObject: pqSessionConnection,
      }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365, // a year
        sameSite: "lax",
      },
    })
  );

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver],
    }),
    context: ({ res, req }) => ({
      req,
      res,
    }),
  });

  apolloServer.start().then(async (_) => {
    apolloServer.applyMiddleware({
      app,
      cors: false,
    });

    await createConnection();

    app.get("/", (_req, res) => res.send("go to /graphql for querying"));
    app.listen(4000, () => {
      console.log("Express web server started: http://0.0.0.0:4000");
    });
  });
})();
