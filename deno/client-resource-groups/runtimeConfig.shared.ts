import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { ResourceGroupsClientConfig } from "./ResourceGroupsClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ResourceGroupsClientConfig = {}) => ({
  apiVersion: "2017-11-27",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Resource Groups",
  urlParser: config.urlParser ?? parseUrl,
});
