
import { QuickSight } from "../QuickSight.ts";
import { QuickSightClient } from "../QuickSightClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface QuickSightPaginationConfiguration extends PaginationConfiguration {
  client: QuickSight | QuickSightClient;
}
