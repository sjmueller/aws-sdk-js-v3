import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { Route53ClientConfig } from "./Route53Client.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: Route53ClientConfig = {}) => ({
  apiVersion: "2013-04-01",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Route 53",
  urlParser: config.urlParser ?? parseUrl,
});
