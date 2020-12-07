import { CodeStarConnections } from "../CodeStarConnections.ts";
import { CodeStarConnectionsClient } from "../CodeStarConnectionsClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface CodeStarConnectionsPaginationConfiguration extends PaginationConfiguration {
  client: CodeStarConnections | CodeStarConnectionsClient;
}
