
import { CodeCommit } from "../CodeCommit.ts";
import { CodeCommitClient } from "../CodeCommitClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface CodeCommitPaginationConfiguration extends PaginationConfiguration {
  client: CodeCommit | CodeCommitClient;
}
