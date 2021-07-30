import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { ResourceGroupsTaggingAPIClientConfig } from "./ResourceGroupsTaggingAPIClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ResourceGroupsTaggingAPIClientConfig = {}) => ({
  apiVersion: "2017-01-26",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Resource Groups Tagging API",
  urlParser: config.urlParser ?? parseUrl,
});
