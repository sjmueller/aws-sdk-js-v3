import { Neptune } from "../Neptune.ts";
import { NeptuneClient } from "../NeptuneClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface NeptunePaginationConfiguration extends PaginationConfiguration {
  client: Neptune | NeptuneClient;
}
