import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { AppIntegrationsClientConfig } from "./AppIntegrationsClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: AppIntegrationsClientConfig = {}) => ({
  apiVersion: "2020-07-29",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "AppIntegrations",
  urlParser: config.urlParser ?? parseUrl,
});
