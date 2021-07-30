import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { ECSClientConfig } from "./ECSClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ECSClientConfig = {}) => ({
  apiVersion: "2014-11-13",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "ECS",
  urlParser: config.urlParser ?? parseUrl,
});
