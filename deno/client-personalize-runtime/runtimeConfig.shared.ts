import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { PersonalizeRuntimeClientConfig } from "./PersonalizeRuntimeClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: PersonalizeRuntimeClientConfig = {}) => ({
  apiVersion: "2018-05-22",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Personalize Runtime",
  urlParser: config.urlParser ?? parseUrl,
});
