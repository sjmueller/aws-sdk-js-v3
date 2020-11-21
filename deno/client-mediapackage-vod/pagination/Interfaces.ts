
import { MediaPackageVod } from "../MediaPackageVod.ts";
import { MediaPackageVodClient } from "../MediaPackageVodClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface MediaPackageVodPaginationConfiguration extends PaginationConfiguration {
  client: MediaPackageVod | MediaPackageVodClient;
}
