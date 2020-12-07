import { MediaLive } from "../MediaLive.ts";
import { MediaLiveClient } from "../MediaLiveClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface MediaLivePaginationConfiguration extends PaginationConfiguration {
  client: MediaLive | MediaLiveClient;
}
