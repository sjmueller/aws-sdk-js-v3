import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { Route53RecoveryControlConfigClientConfig } from "./Route53RecoveryControlConfigClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: Route53RecoveryControlConfigClientConfig = {}) => ({
  apiVersion: "2020-11-02",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Route53 Recovery Control Config",
  urlParser: config.urlParser ?? parseUrl,
});
