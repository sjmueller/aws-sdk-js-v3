import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { CodeGuruReviewerClientConfig } from "./CodeGuruReviewerClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: CodeGuruReviewerClientConfig = {}) => ({
  apiVersion: "2019-09-19",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "CodeGuru Reviewer",
  urlParser: config.urlParser ?? parseUrl,
});
