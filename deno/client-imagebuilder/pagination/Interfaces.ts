
import { Imagebuilder } from "../Imagebuilder.ts";
import { ImagebuilderClient } from "../ImagebuilderClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface ImagebuilderPaginationConfiguration extends PaginationConfiguration {
  client: Imagebuilder | ImagebuilderClient;
}
