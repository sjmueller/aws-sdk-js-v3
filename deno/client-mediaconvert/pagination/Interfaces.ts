
import { MediaConvert } from "../MediaConvert.ts";
import { MediaConvertClient } from "../MediaConvertClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface MediaConvertPaginationConfiguration extends PaginationConfiguration {
  client: MediaConvert | MediaConvertClient;
}
