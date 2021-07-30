import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { CloudSearchClientConfig } from "./CloudSearchClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: CloudSearchClientConfig = {}) => ({
  apiVersion: "2013-01-01",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "CloudSearch",
  urlParser: config.urlParser ?? parseUrl,
});
