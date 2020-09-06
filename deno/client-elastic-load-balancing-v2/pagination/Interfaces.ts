
import { ElasticLoadBalancingV2 } from "../ElasticLoadBalancingV2.ts";
import { ElasticLoadBalancingV2Client } from "../ElasticLoadBalancingV2Client.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface ElasticLoadBalancingV2PaginationConfiguration extends PaginationConfiguration {
  client: ElasticLoadBalancingV2 | ElasticLoadBalancingV2Client;
}
