import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { CloudWatchLogsClientConfig } from "./CloudWatchLogsClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: CloudWatchLogsClientConfig = {}) => ({
  apiVersion: "2014-03-28",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "CloudWatch Logs",
  urlParser: config.urlParser ?? parseUrl,
});
