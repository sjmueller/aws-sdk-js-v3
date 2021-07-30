import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { EMRContainersClientConfig } from "./EMRContainersClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: EMRContainersClientConfig = {}) => ({
  apiVersion: "2020-10-01",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "EMR containers",
  urlParser: config.urlParser ?? parseUrl,
});
