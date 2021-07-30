import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { CognitoIdentityProviderClientConfig } from "./CognitoIdentityProviderClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: CognitoIdentityProviderClientConfig = {}) => ({
  apiVersion: "2016-04-18",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Cognito Identity Provider",
  urlParser: config.urlParser ?? parseUrl,
});
