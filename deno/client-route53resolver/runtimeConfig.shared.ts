import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { Route53ResolverClientConfig } from "./Route53ResolverClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: Route53ResolverClientConfig = {}) => ({
  apiVersion: "2018-04-01",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Route53Resolver",
  urlParser: config.urlParser ?? parseUrl,
});
