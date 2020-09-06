
import { Outposts } from "../Outposts.ts";
import { OutpostsClient } from "../OutpostsClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface OutpostsPaginationConfiguration extends PaginationConfiguration {
  client: Outposts | OutpostsClient;
}
