import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { TranscribeStreamingClientConfig } from "./TranscribeStreamingClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: TranscribeStreamingClientConfig = {}) => ({
  apiVersion: "2017-10-26",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Transcribe Streaming",
  urlParser: config.urlParser ?? parseUrl,
});
