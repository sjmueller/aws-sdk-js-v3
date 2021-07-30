import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { PersonalizeClientConfig } from "./PersonalizeClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: PersonalizeClientConfig = {}) => ({
  apiVersion: "2018-05-22",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Personalize",
  urlParser: config.urlParser ?? parseUrl,
});
