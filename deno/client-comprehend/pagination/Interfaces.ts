import { Comprehend } from "../Comprehend.ts";
import { ComprehendClient } from "../ComprehendClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface ComprehendPaginationConfiguration extends PaginationConfiguration {
  client: Comprehend | ComprehendClient;
}
