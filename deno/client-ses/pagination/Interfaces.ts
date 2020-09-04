import { SES } from "../SES.ts";
import { SESClient } from "../SESClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface SESPaginationConfiguration extends PaginationConfiguration {
  client: SES | SESClient;
}
