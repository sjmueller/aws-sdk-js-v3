
import { GameLift } from "../GameLift.ts";
import { GameLiftClient } from "../GameLiftClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface GameLiftPaginationConfiguration extends PaginationConfiguration {
  client: GameLift | GameLiftClient;
}
