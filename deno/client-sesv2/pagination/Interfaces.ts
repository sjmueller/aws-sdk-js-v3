import { SESv2 } from "../SESv2.ts";
import { SESv2Client } from "../SESv2Client.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface SESv2PaginationConfiguration extends PaginationConfiguration {
  client: SESv2 | SESv2Client;
}
