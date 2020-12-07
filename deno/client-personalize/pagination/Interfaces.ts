import { Personalize } from "../Personalize.ts";
import { PersonalizeClient } from "../PersonalizeClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface PersonalizePaginationConfiguration extends PaginationConfiguration {
  client: Personalize | PersonalizeClient;
}
