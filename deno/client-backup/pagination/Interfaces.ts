import { Backup } from "../Backup.ts";
import { BackupClient } from "../BackupClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface BackupPaginationConfiguration extends PaginationConfiguration {
  client: Backup | BackupClient;
}
