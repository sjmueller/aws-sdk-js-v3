import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { CognitoIdentityClientConfig } from "./CognitoIdentityClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: CognitoIdentityClientConfig = {}) => ({
  apiVersion: "2014-06-30",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Cognito Identity",
  urlParser: config.urlParser ?? parseUrl,
});
