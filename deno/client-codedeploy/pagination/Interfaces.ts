
import { CodeDeploy } from "../CodeDeploy.ts";
import { CodeDeployClient } from "../CodeDeployClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface CodeDeployPaginationConfiguration extends PaginationConfiguration {
  client: CodeDeploy | CodeDeployClient;
}
