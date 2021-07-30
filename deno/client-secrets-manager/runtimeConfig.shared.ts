import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { SecretsManagerClientConfig } from "./SecretsManagerClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SecretsManagerClientConfig = {}) => ({
  apiVersion: "2017-10-17",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Secrets Manager",
  urlParser: config.urlParser ?? parseUrl,
});
