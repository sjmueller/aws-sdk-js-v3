import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { KinesisAnalyticsClientConfig } from "./KinesisAnalyticsClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: KinesisAnalyticsClientConfig = {}) => ({
  apiVersion: "2015-08-14",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Kinesis Analytics",
  urlParser: config.urlParser ?? parseUrl,
});
