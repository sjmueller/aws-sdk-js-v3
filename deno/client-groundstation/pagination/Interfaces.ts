import { GroundStation } from "../GroundStation.ts";
import { GroundStationClient } from "../GroundStationClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface GroundStationPaginationConfiguration extends PaginationConfiguration {
  client: GroundStation | GroundStationClient;
}
