import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { GlueClientConfig } from "./GlueClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: GlueClientConfig = {}) => ({
  apiVersion: "2017-03-31",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Glue",
  urlParser: config.urlParser ?? parseUrl,
});
