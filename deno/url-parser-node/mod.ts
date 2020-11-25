
import { parseQueryString } from "../querystring-parser/mod.ts";
import { Endpoint, QueryParameterBag, UrlParser } from "../types/mod.ts";

export const parseUrl: UrlParser = (url: string): Endpoint => {
  const { hostname = "localhost", pathname = "/", port, protocol = "https:", search } = parse(url);

  let query: QueryParameterBag | undefined;
  if (search) {
    query = parseQueryString(search);
  }

  return {
    hostname,
    port: port ? parseInt(port) : undefined,
    protocol,
    path: pathname,
    query,
  };
};
