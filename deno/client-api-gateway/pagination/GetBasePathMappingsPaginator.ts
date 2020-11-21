
import { APIGateway } from "../APIGateway.ts";
import { APIGatewayClient } from "../APIGatewayClient.ts";
import {
  GetBasePathMappingsCommand,
  GetBasePathMappingsCommandInput,
  GetBasePathMappingsCommandOutput,
} from "../commands/GetBasePathMappingsCommand.ts";
import { APIGatewayPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: APIGatewayClient,
  input: GetBasePathMappingsCommandInput,
  ...args: any
): Promise<GetBasePathMappingsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetBasePathMappingsCommand(input), ...args);
};
const makePagedRequest = async (
  client: APIGateway,
  input: GetBasePathMappingsCommandInput,
  ...args: any
): Promise<GetBasePathMappingsCommandOutput> => {
  // @ts-ignore
  return await client.getBasePathMappings(input, ...args);
};
export async function* paginateGetBasePathMappings(
  config: APIGatewayPaginationConfiguration,
  input: GetBasePathMappingsCommandInput,
  ...additionalArguments: any
): Paginator<GetBasePathMappingsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetBasePathMappingsCommandOutput;
  while (hasNext) {
    input.position = token;
    input["limit"] = config.pageSize;
    if (config.client instanceof APIGateway) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof APIGatewayClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected APIGateway | APIGatewayClient");
    }
    yield page;
    token = page.position;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
