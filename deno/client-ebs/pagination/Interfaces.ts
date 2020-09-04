import { EBS } from "../EBS.ts";
import { EBSClient } from "../EBSClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface EBSPaginationConfiguration extends PaginationConfiguration {
  client: EBS | EBSClient;
}
