import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { ElasticBeanstalkClientConfig } from "./ElasticBeanstalkClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ElasticBeanstalkClientConfig = {}) => ({
  apiVersion: "2010-12-01",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Elastic Beanstalk",
  urlParser: config.urlParser ?? parseUrl,
});
