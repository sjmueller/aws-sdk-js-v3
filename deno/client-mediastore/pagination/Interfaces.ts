import { MediaStore } from "../MediaStore.ts";
import { MediaStoreClient } from "../MediaStoreClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface MediaStorePaginationConfiguration extends PaginationConfiguration {
  client: MediaStore | MediaStoreClient;
}
