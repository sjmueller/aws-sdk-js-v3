import { Lambda } from "../Lambda.ts";
import { LambdaClient } from "../LambdaClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface LambdaPaginationConfiguration extends PaginationConfiguration {
  client: Lambda | LambdaClient;
}
