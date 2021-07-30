import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { KinesisVideoArchivedMediaClientConfig } from "./KinesisVideoArchivedMediaClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: KinesisVideoArchivedMediaClientConfig = {}) => ({
  apiVersion: "2017-09-30",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Kinesis Video Archived Media",
  urlParser: config.urlParser ?? parseUrl,
});
