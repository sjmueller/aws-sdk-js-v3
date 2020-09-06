
import { CodeBuild } from "../CodeBuild.ts";
import { CodeBuildClient } from "../CodeBuildClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface CodeBuildPaginationConfiguration extends PaginationConfiguration {
  client: CodeBuild | CodeBuildClient;
}
