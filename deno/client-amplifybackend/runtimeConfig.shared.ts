import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { AmplifyBackendClientConfig } from "./AmplifyBackendClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: AmplifyBackendClientConfig = {}) => ({
  apiVersion: "2020-08-11",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "AmplifyBackend",
  urlParser: config.urlParser ?? parseUrl,
});
