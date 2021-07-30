import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { PersonalizeEventsClientConfig } from "./PersonalizeEventsClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: PersonalizeEventsClientConfig = {}) => ({
  apiVersion: "2018-03-22",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Personalize Events",
  urlParser: config.urlParser ?? parseUrl,
});
