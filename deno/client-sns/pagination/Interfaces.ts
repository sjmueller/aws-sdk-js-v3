import { SNS } from "../SNS.ts";
import { SNSClient } from "../SNSClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface SNSPaginationConfiguration extends PaginationConfiguration {
  client: SNS | SNSClient;
}
