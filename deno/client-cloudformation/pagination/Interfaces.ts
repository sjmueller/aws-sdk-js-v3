
import { CloudFormation } from "../CloudFormation.ts";
import { CloudFormationClient } from "../CloudFormationClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface CloudFormationPaginationConfiguration extends PaginationConfiguration {
  client: CloudFormation | CloudFormationClient;
}
