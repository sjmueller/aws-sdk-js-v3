
import { RoboMaker } from "../RoboMaker.ts";
import { RoboMakerClient } from "../RoboMakerClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface RoboMakerPaginationConfiguration extends PaginationConfiguration {
  client: RoboMaker | RoboMakerClient;
}
