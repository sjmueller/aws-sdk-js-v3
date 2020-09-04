import { Synthetics } from "../Synthetics.ts";
import { SyntheticsClient } from "../SyntheticsClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface SyntheticsPaginationConfiguration extends PaginationConfiguration {
  client: Synthetics | SyntheticsClient;
}
