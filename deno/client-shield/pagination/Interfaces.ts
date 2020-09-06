
import { Shield } from "../Shield.ts";
import { ShieldClient } from "../ShieldClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface ShieldPaginationConfiguration extends PaginationConfiguration {
  client: Shield | ShieldClient;
}
