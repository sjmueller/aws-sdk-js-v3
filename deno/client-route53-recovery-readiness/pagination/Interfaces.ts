import { Route53RecoveryReadiness } from "../Route53RecoveryReadiness.ts";
import { Route53RecoveryReadinessClient } from "../Route53RecoveryReadinessClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface Route53RecoveryReadinessPaginationConfiguration extends PaginationConfiguration {
  client: Route53RecoveryReadiness | Route53RecoveryReadinessClient;
}
