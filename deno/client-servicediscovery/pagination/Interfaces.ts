import { ServiceDiscovery } from "../ServiceDiscovery.ts";
import { ServiceDiscoveryClient } from "../ServiceDiscoveryClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface ServiceDiscoveryPaginationConfiguration extends PaginationConfiguration {
  client: ServiceDiscovery | ServiceDiscoveryClient;
}
