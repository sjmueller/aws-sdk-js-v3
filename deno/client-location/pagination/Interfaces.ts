import { Location } from "../Location.ts";
import { LocationClient } from "../LocationClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface LocationPaginationConfiguration extends PaginationConfiguration {
  client: Location | LocationClient;
}
