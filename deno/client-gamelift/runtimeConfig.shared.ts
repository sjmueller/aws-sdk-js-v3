import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { GameLiftClientConfig } from "./GameLiftClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: GameLiftClientConfig = {}) => ({
  apiVersion: "2015-10-01",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "GameLift",
  urlParser: config.urlParser ?? parseUrl,
});
