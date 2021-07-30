import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { AlexaForBusinessClientConfig } from "./AlexaForBusinessClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: AlexaForBusinessClientConfig = {}) => ({
  apiVersion: "2017-11-09",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Alexa For Business",
  urlParser: config.urlParser ?? parseUrl,
});
