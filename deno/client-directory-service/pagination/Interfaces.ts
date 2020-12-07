import { DirectoryService } from "../DirectoryService.ts";
import { DirectoryServiceClient } from "../DirectoryServiceClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface DirectoryServicePaginationConfiguration extends PaginationConfiguration {
  client: DirectoryService | DirectoryServiceClient;
}
