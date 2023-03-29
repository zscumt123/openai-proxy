import { serve } from "std/http/server.ts";
const AI_API_HOST = "api.openai.com";

serve(async (req) => {
  const url = new URL(req.url);

  if (url.pathname === "/") {
    return new Response(await Deno.readTextFile("./site.html"), {
      headers: {
        "content-type": "text/html; charset=utf-8",
      },
    });
  }

  url.host = AI_API_HOST;
  return await fetch(url, req);
});
