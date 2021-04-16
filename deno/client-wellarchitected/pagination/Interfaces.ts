import { WellArchitected } from "../WellArchitected.ts";
import { WellArchitectedClient } from "../WellArchitectedClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface WellArchitectedPaginationConfiguration extends PaginationConfiguration {
  client: WellArchitected | WellArchitectedClient;
}
