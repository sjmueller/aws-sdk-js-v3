import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { S3ClientConfig } from "./S3Client.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: S3ClientConfig = {}) => ({
  apiVersion: "2006-03-01",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "S3",
  signingEscapePath: config.signingEscapePath ?? false,
  urlParser: config.urlParser ?? parseUrl,
  useArnRegion: config.useArnRegion ?? false,
});
