import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { PinpointSMSVoiceClientConfig } from "./PinpointSMSVoiceClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: PinpointSMSVoiceClientConfig = {}) => ({
  apiVersion: "2018-09-05",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Pinpoint SMS Voice",
  urlParser: config.urlParser ?? parseUrl,
});
