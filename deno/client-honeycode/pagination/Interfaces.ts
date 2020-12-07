import { Honeycode } from "../Honeycode.ts";
import { HoneycodeClient } from "../HoneycodeClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface HoneycodePaginationConfiguration extends PaginationConfiguration {
  client: Honeycode | HoneycodeClient;
}
