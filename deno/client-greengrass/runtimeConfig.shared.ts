import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { GreengrassClientConfig } from "./GreengrassClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: GreengrassClientConfig = {}) => ({
  apiVersion: "2017-06-07",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Greengrass",
  urlParser: config.urlParser ?? parseUrl,
});
