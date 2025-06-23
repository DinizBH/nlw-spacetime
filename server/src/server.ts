import fastify from "fastify";
import { PrismaClient } from "./generated/prisma";

const app = fastify();
const prisma = new PrismaClient();

app.get("/users", async () => {
  const users = await prisma.user.findMany();
  return users;
});

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("Server is running on http://localhost:3333");
  });
