import { ECR } from "../ECR.ts";
import { ECRClient } from "../ECRClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface ECRPaginationConfiguration extends PaginationConfiguration {
  client: ECR | ECRClient;
}
