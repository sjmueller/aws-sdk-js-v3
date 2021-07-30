import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { ManagedBlockchainClientConfig } from "./ManagedBlockchainClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ManagedBlockchainClientConfig = {}) => ({
  apiVersion: "2018-09-24",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "ManagedBlockchain",
  urlParser: config.urlParser ?? parseUrl,
});
