
import { Polly } from "../Polly.ts";
import { PollyClient } from "../PollyClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface PollyPaginationConfiguration extends PaginationConfiguration {
  client: Polly | PollyClient;
}
