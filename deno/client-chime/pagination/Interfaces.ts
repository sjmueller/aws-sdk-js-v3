
import { Chime } from "../Chime.ts";
import { ChimeClient } from "../ChimeClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface ChimePaginationConfiguration extends PaginationConfiguration {
  client: Chime | ChimeClient;
}
