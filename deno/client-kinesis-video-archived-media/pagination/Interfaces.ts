import { KinesisVideoArchivedMedia } from "../KinesisVideoArchivedMedia.ts";
import { KinesisVideoArchivedMediaClient } from "../KinesisVideoArchivedMediaClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface KinesisVideoArchivedMediaPaginationConfiguration extends PaginationConfiguration {
  client: KinesisVideoArchivedMedia | KinesisVideoArchivedMediaClient;
}
