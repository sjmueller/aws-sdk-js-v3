import { AlexaForBusiness } from "../AlexaForBusiness.ts";
import { AlexaForBusinessClient } from "../AlexaForBusinessClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface AlexaForBusinessPaginationConfiguration extends PaginationConfiguration {
  client: AlexaForBusiness | AlexaForBusinessClient;
}
