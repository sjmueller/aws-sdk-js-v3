import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { KinesisVideoSignalingClientConfig } from "./KinesisVideoSignalingClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: KinesisVideoSignalingClientConfig = {}) => ({
  apiVersion: "2019-12-04",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Kinesis Video Signaling",
  urlParser: config.urlParser ?? parseUrl,
});
