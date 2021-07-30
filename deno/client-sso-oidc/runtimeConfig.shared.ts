import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { SSOOIDCClientConfig } from "./SSOOIDCClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SSOOIDCClientConfig = {}) => ({
  apiVersion: "2019-06-10",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "SSO OIDC",
  urlParser: config.urlParser ?? parseUrl,
});
