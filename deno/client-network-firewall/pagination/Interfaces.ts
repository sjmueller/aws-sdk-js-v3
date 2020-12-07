import { NetworkFirewall } from "../NetworkFirewall.ts";
import { NetworkFirewallClient } from "../NetworkFirewallClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface NetworkFirewallPaginationConfiguration extends PaginationConfiguration {
  client: NetworkFirewall | NetworkFirewallClient;
}
