import { Translate } from "../Translate.ts";
import { TranslateClient } from "../TranslateClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface TranslatePaginationConfiguration extends PaginationConfiguration {
  client: Translate | TranslateClient;
}
