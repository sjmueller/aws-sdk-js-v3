import { KinesisVideo } from "../KinesisVideo.ts";
import { KinesisVideoClient } from "../KinesisVideoClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface KinesisVideoPaginationConfiguration extends PaginationConfiguration {
  client: KinesisVideo | KinesisVideoClient;
}
