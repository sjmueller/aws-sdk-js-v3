import { LexModelsV2 } from "../LexModelsV2.ts";
import { LexModelsV2Client } from "../LexModelsV2Client.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface LexModelsV2PaginationConfiguration extends PaginationConfiguration {
  client: LexModelsV2 | LexModelsV2Client;
}
