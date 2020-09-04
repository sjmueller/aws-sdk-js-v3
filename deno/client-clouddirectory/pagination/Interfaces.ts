import { CloudDirectory } from "../CloudDirectory.ts";
import { CloudDirectoryClient } from "../CloudDirectoryClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface CloudDirectoryPaginationConfiguration extends PaginationConfiguration {
  client: CloudDirectory | CloudDirectoryClient;
}
