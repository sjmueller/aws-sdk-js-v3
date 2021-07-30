import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { MigrationHubClientConfig } from "./MigrationHubClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: MigrationHubClientConfig = {}) => ({
  apiVersion: "2017-05-31",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Migration Hub",
  urlParser: config.urlParser ?? parseUrl,
});
