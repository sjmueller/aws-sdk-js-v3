import { AppMesh } from "../AppMesh.ts";
import { AppMeshClient } from "../AppMeshClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface AppMeshPaginationConfiguration extends PaginationConfiguration {
  client: AppMesh | AppMeshClient;
}
