import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { EventBridgeClientConfig } from "./EventBridgeClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: EventBridgeClientConfig = {}) => ({
  apiVersion: "2015-10-07",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "EventBridge",
  urlParser: config.urlParser ?? parseUrl,
});
