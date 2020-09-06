
import { WorkSpaces } from "../WorkSpaces.ts";
import { WorkSpacesClient } from "../WorkSpacesClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface WorkSpacesPaginationConfiguration extends PaginationConfiguration {
  client: WorkSpaces | WorkSpacesClient;
}
