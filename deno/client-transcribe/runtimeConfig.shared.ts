import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { TranscribeClientConfig } from "./TranscribeClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: TranscribeClientConfig = {}) => ({
  apiVersion: "2017-10-26",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Transcribe",
  urlParser: config.urlParser ?? parseUrl,
});
