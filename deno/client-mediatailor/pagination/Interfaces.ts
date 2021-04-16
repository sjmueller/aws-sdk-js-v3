import { MediaTailor } from "../MediaTailor.ts";
import { MediaTailorClient } from "../MediaTailorClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface MediaTailorPaginationConfiguration extends PaginationConfiguration {
  client: MediaTailor | MediaTailorClient;
}
