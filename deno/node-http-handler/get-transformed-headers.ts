import { HeaderBag } from "../types/mod.ts";

const getTransformedHeaders = (headers: IncomingHttpHeaders) => {
  const transformedHeaders: HeaderBag = {};

  for (const name of Object.keys(headers)) {
    const headerValues = <string>headers[name];
    transformedHeaders[name] = Array.isArray(headerValues) ? headerValues.join(",") : headerValues;
  }

  return transformedHeaders;
};

export { getTransformedHeaders };
