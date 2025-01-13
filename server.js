const file = await Bun.file("quotes.json");
const json = await file.json();
const array = json.quotes;

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
  },
  async fetch(req) {
    let url = new URL(req.url);
    if (url.pathname == "/quote")
      return new Response(
        JSON.stringify(array[Math.floor(Math.random() * array.length)]),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    else return Response.redirect("/index.html");
  },
});
