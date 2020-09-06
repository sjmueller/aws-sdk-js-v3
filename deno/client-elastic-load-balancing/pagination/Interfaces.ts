
import { ElasticLoadBalancing } from "../ElasticLoadBalancing.ts";
import { ElasticLoadBalancingClient } from "../ElasticLoadBalancingClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface ElasticLoadBalancingPaginationConfiguration extends PaginationConfiguration {
  client: ElasticLoadBalancing | ElasticLoadBalancingClient;
}
