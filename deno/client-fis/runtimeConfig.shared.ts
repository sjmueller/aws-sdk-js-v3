import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { FisClientConfig } from "./FisClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: FisClientConfig = {}) => ({
  apiVersion: "2020-12-01",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "fis",
  urlParser: config.urlParser ?? parseUrl,
});
