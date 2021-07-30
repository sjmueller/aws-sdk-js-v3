import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { DetectiveClientConfig } from "./DetectiveClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: DetectiveClientConfig = {}) => ({
  apiVersion: "2018-10-26",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Detective",
  urlParser: config.urlParser ?? parseUrl,
});
