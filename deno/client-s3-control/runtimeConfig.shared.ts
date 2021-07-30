import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { S3ControlClientConfig } from "./S3ControlClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: S3ControlClientConfig = {}) => ({
  apiVersion: "2018-08-20",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "S3 Control",
  urlParser: config.urlParser ?? parseUrl,
});
