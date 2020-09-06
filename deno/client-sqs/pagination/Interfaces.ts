
import { SQS } from "../SQS.ts";
import { SQSClient } from "../SQSClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface SQSPaginationConfiguration extends PaginationConfiguration {
  client: SQS | SQSClient;
}
