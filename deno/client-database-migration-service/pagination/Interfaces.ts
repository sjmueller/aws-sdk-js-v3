
import { DatabaseMigrationService } from "../DatabaseMigrationService.ts";
import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface DatabaseMigrationServicePaginationConfiguration extends PaginationConfiguration {
  client: DatabaseMigrationService | DatabaseMigrationServiceClient;
}
