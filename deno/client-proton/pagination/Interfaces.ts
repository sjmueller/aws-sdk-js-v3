import { Proton } from "../Proton.ts";
import { ProtonClient } from "../ProtonClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface ProtonPaginationConfiguration extends PaginationConfiguration {
  client: Proton | ProtonClient;
}
