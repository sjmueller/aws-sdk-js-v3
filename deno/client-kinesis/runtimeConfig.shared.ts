import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { KinesisClientConfig } from "./KinesisClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: KinesisClientConfig = {}) => ({
  apiVersion: "2013-12-02",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Kinesis",
  urlParser: config.urlParser ?? parseUrl,
});
