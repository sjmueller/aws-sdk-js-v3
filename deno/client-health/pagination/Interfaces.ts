
import { Health } from "../Health.ts";
import { HealthClient } from "../HealthClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface HealthPaginationConfiguration extends PaginationConfiguration {
  client: Health | HealthClient;
}
