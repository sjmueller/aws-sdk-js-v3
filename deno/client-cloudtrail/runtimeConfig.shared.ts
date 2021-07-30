import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { CloudTrailClientConfig } from "./CloudTrailClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: CloudTrailClientConfig = {}) => ({
  apiVersion: "2013-11-01",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "CloudTrail",
  urlParser: config.urlParser ?? parseUrl,
});
