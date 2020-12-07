import { GlobalAccelerator } from "../GlobalAccelerator.ts";
import { GlobalAcceleratorClient } from "../GlobalAcceleratorClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface GlobalAcceleratorPaginationConfiguration extends PaginationConfiguration {
  client: GlobalAccelerator | GlobalAcceleratorClient;
}
