import { Elysia } from "elysia";
import { node } from "@elysiajs/node";

const app = new Elysia({ adapter: node() }).get("/", () => "hi").listen(3999);
await new Promise((resolve) => setTimeout(resolve, 200));
console.log("GET /:", await (await fetch("http://127.0.0.1:3999/")).text());
console.log("app.server:", app.server);
try {
  await app.stop();
  console.log("stopped");
} catch (error) {
  console.log("app.stop() threw:", error.message);
}
process.exit(0);
