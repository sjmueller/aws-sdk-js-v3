import { DynamoDB } from "../DynamoDB.ts";
import { DynamoDBClient } from "../DynamoDBClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface DynamoDBPaginationConfiguration extends PaginationConfiguration {
  client: DynamoDB | DynamoDBClient;
}
