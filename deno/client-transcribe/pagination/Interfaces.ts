import { Transcribe } from "../Transcribe.ts";
import { TranscribeClient } from "../TranscribeClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface TranscribePaginationConfiguration extends PaginationConfiguration {
  client: Transcribe | TranscribeClient;
}
