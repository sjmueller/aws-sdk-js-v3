
import { ElastiCache } from "../ElastiCache.ts";
import { ElastiCacheClient } from "../ElastiCacheClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface ElastiCachePaginationConfiguration extends PaginationConfiguration {
  client: ElastiCache | ElastiCacheClient;
}
