import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { AutoScalingClientConfig } from "./AutoScalingClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: AutoScalingClientConfig = {}) => ({
  apiVersion: "2011-01-01",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Auto Scaling",
  urlParser: config.urlParser ?? parseUrl,
});
