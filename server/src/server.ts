import "dotenv/config";
import fastify from "fastify";
import cors from "@fastify/cors";
import { memoriesRoutes } from "./routes/memories";
import { authRoutes } from "./routes/auth";
import jwt from "@fastify/jwt";

const app = fastify();

app.register(cors, {
  origin: true, // todas as URLs de front-end podem acessar o backend
});

app.register(jwt, {
  secret: "spacetime",
});
app.register(authRoutes);
app.register(memoriesRoutes);

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("Server is running on http://localhost:3333");
  });
