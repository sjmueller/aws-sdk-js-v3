import { Codeartifact } from "../Codeartifact.ts";
import { CodeartifactClient } from "../CodeartifactClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface CodeartifactPaginationConfiguration extends PaginationConfiguration {
  client: Codeartifact | CodeartifactClient;
}
