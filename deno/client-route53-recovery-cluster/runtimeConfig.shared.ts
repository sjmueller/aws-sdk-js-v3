import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { Route53RecoveryClusterClientConfig } from "./Route53RecoveryClusterClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: Route53RecoveryClusterClientConfig = {}) => ({
  apiVersion: "2019-12-02",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Route53 Recovery Cluster",
  urlParser: config.urlParser ?? parseUrl,
});
