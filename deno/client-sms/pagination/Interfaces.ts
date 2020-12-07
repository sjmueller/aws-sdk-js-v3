import { SMS } from "../SMS.ts";
import { SMSClient } from "../SMSClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface SMSPaginationConfiguration extends PaginationConfiguration {
  client: SMS | SMSClient;
}
