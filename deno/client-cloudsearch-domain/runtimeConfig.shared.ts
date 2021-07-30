import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { CloudSearchDomainClientConfig } from "./CloudSearchDomainClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: CloudSearchDomainClientConfig = {}) => ({
  apiVersion: "2013-01-01",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "CloudSearch Domain",
  urlParser: config.urlParser ?? parseUrl,
});
