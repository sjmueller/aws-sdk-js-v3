import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { ConnectContactLensClientConfig } from "./ConnectContactLensClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ConnectContactLensClientConfig = {}) => ({
  apiVersion: "2020-08-21",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Connect Contact Lens",
  urlParser: config.urlParser ?? parseUrl,
});
