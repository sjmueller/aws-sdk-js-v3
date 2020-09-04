import { Cloud9 } from "../Cloud9.ts";
import { Cloud9Client } from "../Cloud9Client.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface Cloud9PaginationConfiguration extends PaginationConfiguration {
  client: Cloud9 | Cloud9Client;
}
