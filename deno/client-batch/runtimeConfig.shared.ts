import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { BatchClientConfig } from "./BatchClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: BatchClientConfig = {}) => ({
  apiVersion: "2016-08-10",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Batch",
  urlParser: config.urlParser ?? parseUrl,
});
