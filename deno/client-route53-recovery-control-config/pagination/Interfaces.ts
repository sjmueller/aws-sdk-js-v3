import { Route53RecoveryControlConfig } from "../Route53RecoveryControlConfig.ts";
import { Route53RecoveryControlConfigClient } from "../Route53RecoveryControlConfigClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface Route53RecoveryControlConfigPaginationConfiguration extends PaginationConfiguration {
  client: Route53RecoveryControlConfig | Route53RecoveryControlConfigClient;
}
