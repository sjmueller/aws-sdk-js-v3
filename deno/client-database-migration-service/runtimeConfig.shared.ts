import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { DatabaseMigrationServiceClientConfig } from "./DatabaseMigrationServiceClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: DatabaseMigrationServiceClientConfig = {}) => ({
  apiVersion: "2016-01-01",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Database Migration Service",
  urlParser: config.urlParser ?? parseUrl,
});
