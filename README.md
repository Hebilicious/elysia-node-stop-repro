# `app.stop()` throws with `@elysiajs/node`

With `new Elysia({ adapter: node() }).listen(port)`, the server runs, but `app.server` stays `null`, and `await app.stop()` throws `Elysia isn't running. Call app.listen to start the server.`

`@elysiajs/node` takes `stop` from the web standard adapter of Elysia, which reads `app.server`. The `listen` of `@elysiajs/node` does not set `app.server`.

```sh
npm install
npm run repro
```

Output with elysia 1.4.30 and @elysiajs/node 1.4.5, on Node.js 26:

```
GET /: hi
app.server: null
app.stop() threw: Elysia isn't running. Call `app.listen` to start the server.
```

Fix: [Hebilicious/elysia-node@fix-app-server](https://github.com/Hebilicious/elysia-node/tree/fix-app-server) sets `app.server` in `listen`.
