import { EFS } from "../EFS.ts";
import { EFSClient } from "../EFSClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface EFSPaginationConfiguration extends PaginationConfiguration {
  client: EFS | EFSClient;
}
