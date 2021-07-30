import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { KinesisAnalyticsV2ClientConfig } from "./KinesisAnalyticsV2Client.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: KinesisAnalyticsV2ClientConfig = {}) => ({
  apiVersion: "2018-05-23",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Kinesis Analytics V2",
  urlParser: config.urlParser ?? parseUrl,
});
