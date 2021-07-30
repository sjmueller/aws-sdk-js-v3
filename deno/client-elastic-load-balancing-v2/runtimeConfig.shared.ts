import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { ElasticLoadBalancingV2ClientConfig } from "./ElasticLoadBalancingV2Client.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ElasticLoadBalancingV2ClientConfig = {}) => ({
  apiVersion: "2015-12-01",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Elastic Load Balancing v2",
  urlParser: config.urlParser ?? parseUrl,
});
