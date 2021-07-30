import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { PinpointEmailClientConfig } from "./PinpointEmailClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: PinpointEmailClientConfig = {}) => ({
  apiVersion: "2018-07-26",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Pinpoint Email",
  urlParser: config.urlParser ?? parseUrl,
});
