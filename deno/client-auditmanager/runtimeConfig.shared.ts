import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { AuditManagerClientConfig } from "./AuditManagerClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: AuditManagerClientConfig = {}) => ({
  apiVersion: "2017-07-25",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "AuditManager",
  urlParser: config.urlParser ?? parseUrl,
});
