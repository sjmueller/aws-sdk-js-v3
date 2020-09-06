
import { Inspector } from "../Inspector.ts";
import { InspectorClient } from "../InspectorClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface InspectorPaginationConfiguration extends PaginationConfiguration {
  client: Inspector | InspectorClient;
}
