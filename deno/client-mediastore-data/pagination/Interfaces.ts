import { MediaStoreData } from "../MediaStoreData.ts";
import { MediaStoreDataClient } from "../MediaStoreDataClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface MediaStoreDataPaginationConfiguration extends PaginationConfiguration {
  client: MediaStoreData | MediaStoreDataClient;
}
