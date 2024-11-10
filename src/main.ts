import { Hono } from "hono";
import { serve, type Server } from "bun";

const app = new Hono();

app.get("/", (c) => c.text("OK"));

const server: Server = serve({
  fetch: app.fetch,
  port: 5000,
});

console.log(`Listening on localhost:${server.port}`);
