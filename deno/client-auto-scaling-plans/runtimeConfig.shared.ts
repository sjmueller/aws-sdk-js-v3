import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { AutoScalingPlansClientConfig } from "./AutoScalingPlansClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: AutoScalingPlansClientConfig = {}) => ({
  apiVersion: "2018-01-06",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Auto Scaling Plans",
  urlParser: config.urlParser ?? parseUrl,
});
