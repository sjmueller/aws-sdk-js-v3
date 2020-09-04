import { IAM } from "../IAM.ts";
import { IAMClient } from "../IAMClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface IAMPaginationConfiguration extends PaginationConfiguration {
  client: IAM | IAMClient;
}
