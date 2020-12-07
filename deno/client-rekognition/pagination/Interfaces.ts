import { Rekognition } from "../Rekognition.ts";
import { RekognitionClient } from "../RekognitionClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface RekognitionPaginationConfiguration extends PaginationConfiguration {
  client: Rekognition | RekognitionClient;
}
