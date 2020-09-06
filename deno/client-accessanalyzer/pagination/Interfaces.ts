
import { AccessAnalyzer } from "../AccessAnalyzer.ts";
import { AccessAnalyzerClient } from "../AccessAnalyzerClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface AccessAnalyzerPaginationConfiguration extends PaginationConfiguration {
  client: AccessAnalyzer | AccessAnalyzerClient;
}
