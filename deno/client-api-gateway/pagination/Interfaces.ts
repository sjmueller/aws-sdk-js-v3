import { APIGateway } from "../APIGateway.ts";
import { APIGatewayClient } from "../APIGatewayClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface APIGatewayPaginationConfiguration extends PaginationConfiguration {
  client: APIGateway | APIGatewayClient;
}
