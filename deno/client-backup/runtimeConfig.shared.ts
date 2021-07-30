import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { BackupClientConfig } from "./BackupClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: BackupClientConfig = {}) => ({
  apiVersion: "2018-11-15",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Backup",
  urlParser: config.urlParser ?? parseUrl,
});
