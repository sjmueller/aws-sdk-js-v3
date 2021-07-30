import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { PinpointClientConfig } from "./PinpointClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: PinpointClientConfig = {}) => ({
  apiVersion: "2016-12-01",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Pinpoint",
  urlParser: config.urlParser ?? parseUrl,
});
