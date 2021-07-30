import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { Route53DomainsClientConfig } from "./Route53DomainsClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: Route53DomainsClientConfig = {}) => ({
  apiVersion: "2014-05-15",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Route 53 Domains",
  urlParser: config.urlParser ?? parseUrl,
});
