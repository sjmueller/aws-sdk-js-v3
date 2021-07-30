import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { FirehoseClientConfig } from "./FirehoseClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: FirehoseClientConfig = {}) => ({
  apiVersion: "2015-08-04",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Firehose",
  urlParser: config.urlParser ?? parseUrl,
});
