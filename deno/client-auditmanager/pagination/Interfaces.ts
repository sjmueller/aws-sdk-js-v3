import { AuditManager } from "../AuditManager.ts";
import { AuditManagerClient } from "../AuditManagerClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface AuditManagerPaginationConfiguration extends PaginationConfiguration {
  client: AuditManager | AuditManagerClient;
}
