
import { FraudDetector } from "../FraudDetector.ts";
import { FraudDetectorClient } from "../FraudDetectorClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface FraudDetectorPaginationConfiguration extends PaginationConfiguration {
  client: FraudDetector | FraudDetectorClient;
}
