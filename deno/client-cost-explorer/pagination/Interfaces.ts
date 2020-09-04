import { CostExplorer } from "../CostExplorer.ts";
import { CostExplorerClient } from "../CostExplorerClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface CostExplorerPaginationConfiguration extends PaginationConfiguration {
  client: CostExplorer | CostExplorerClient;
}
