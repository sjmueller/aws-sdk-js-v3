import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { DynamoDBClientConfig } from "./DynamoDBClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: DynamoDBClientConfig = {}) => ({
  apiVersion: "2012-08-10",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "DynamoDB",
  urlParser: config.urlParser ?? parseUrl,
});
