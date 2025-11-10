let cached;

export async function getParse() {
  if (cached) return cached;
  if (typeof window === "undefined") throw new Error("Parse needs the browser");

  await import("parse/dist/parse.min.js");
  const Parse = window.Parse;
  const PARSE_APPLICATION_ID = "vaF4jtgLS63CEbr6kP7mPoKGsTh9hI7Eca6L4z3h";
  const PARSE_HOST_URL = "https://parseapi.back4app.com/";
  const PARSE_JAVASCRIPT_KEY = "hyineiq5YYabDEgN83IbnXjxJlv1UUyFS7eHUOTK";
  Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
  Parse.serverURL = PARSE_HOST_URL;

  cached = Parse;
  return Parse;
}
