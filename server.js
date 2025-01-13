const server = Bun.serve({
  port: 8080,
  static: {
    "/index.html": new Response(await Bun.file("index.html").bytes(), {
      headers: {
        "Content-Type": "text/html",
      },
    }),
    "/styles.css": new Response(await Bun.file("styles.css").bytes(), {
      headers: {
        "Content-Type": "text/css",
      },
    }),
    "/script.js": new Response(await Bun.file("script.js").bytes(), {
      headers: {
        "Content-Type": "text/javascript",
      },
    }),
    "/quote": new Response(await fetch("https://zenquotes.io/api/random")),
  },
  async fetch(req) {
    let url = new URL(req.url);
    if (url.pathname == "/quote");
    return await fetch("https://zenquotes.io/api/random");
  },
});
console.log(server.url);
