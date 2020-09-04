import { Macie } from "../Macie.ts";
import { MacieClient } from "../MacieClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface MaciePaginationConfiguration extends PaginationConfiguration {
  client: Macie | MacieClient;
}
