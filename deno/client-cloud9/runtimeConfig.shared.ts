import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { Cloud9ClientConfig } from "./Cloud9Client.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: Cloud9ClientConfig = {}) => ({
  apiVersion: "2017-09-23",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Cloud9",
  urlParser: config.urlParser ?? parseUrl,
});
