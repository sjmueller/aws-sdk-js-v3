import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { DirectConnectClientConfig } from "./DirectConnectClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: DirectConnectClientConfig = {}) => ({
  apiVersion: "2012-10-25",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Direct Connect",
  urlParser: config.urlParser ?? parseUrl,
});
