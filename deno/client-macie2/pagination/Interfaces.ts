import { Macie2 } from "../Macie2.ts";
import { Macie2Client } from "../Macie2Client.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface Macie2PaginationConfiguration extends PaginationConfiguration {
  client: Macie2 | Macie2Client;
}
