
import { SSM } from "../SSM.ts";
import { SSMClient } from "../SSMClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface SSMPaginationConfiguration extends PaginationConfiguration {
  client: SSM | SSMClient;
}
