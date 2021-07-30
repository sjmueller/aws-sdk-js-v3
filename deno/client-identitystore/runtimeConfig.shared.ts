import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { IdentitystoreClientConfig } from "./IdentitystoreClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: IdentitystoreClientConfig = {}) => ({
  apiVersion: "2020-06-15",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "identitystore",
  urlParser: config.urlParser ?? parseUrl,
});
