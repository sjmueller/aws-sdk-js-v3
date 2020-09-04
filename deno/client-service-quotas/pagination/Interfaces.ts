import { ServiceQuotas } from "../ServiceQuotas.ts";
import { ServiceQuotasClient } from "../ServiceQuotasClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface ServiceQuotasPaginationConfiguration extends PaginationConfiguration {
  client: ServiceQuotas | ServiceQuotasClient;
}
