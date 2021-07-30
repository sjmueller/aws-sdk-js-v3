import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { ConnectParticipantClientConfig } from "./ConnectParticipantClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ConnectParticipantClientConfig = {}) => ({
  apiVersion: "2018-09-07",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "ConnectParticipant",
  urlParser: config.urlParser ?? parseUrl,
});
