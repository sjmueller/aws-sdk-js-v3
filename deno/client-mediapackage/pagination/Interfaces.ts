
import { MediaPackage } from "../MediaPackage.ts";
import { MediaPackageClient } from "../MediaPackageClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface MediaPackagePaginationConfiguration extends PaginationConfiguration {
  client: MediaPackage | MediaPackageClient;
}
