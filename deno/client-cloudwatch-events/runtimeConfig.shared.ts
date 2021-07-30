import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { CloudWatchEventsClientConfig } from "./CloudWatchEventsClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: CloudWatchEventsClientConfig = {}) => ({
  apiVersion: "2015-10-07",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "CloudWatch Events",
  urlParser: config.urlParser ?? parseUrl,
});
