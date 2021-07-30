import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { ApplicationAutoScalingClientConfig } from "./ApplicationAutoScalingClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ApplicationAutoScalingClientConfig = {}) => ({
  apiVersion: "2016-02-06",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Application Auto Scaling",
  urlParser: config.urlParser ?? parseUrl,
});
