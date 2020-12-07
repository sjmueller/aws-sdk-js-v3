import { APIGateway } from "../APIGateway.ts";
import { APIGatewayClient } from "../APIGatewayClient.ts";
import { GetVpcLinksCommand, GetVpcLinksCommandInput, GetVpcLinksCommandOutput } from "../commands/GetVpcLinksCommand.ts";
import { APIGatewayPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: APIGatewayClient,
  input: GetVpcLinksCommandInput,
  ...args: any
): Promise<GetVpcLinksCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetVpcLinksCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: APIGateway,
  input: GetVpcLinksCommandInput,
  ...args: any
): Promise<GetVpcLinksCommandOutput> => {
  // @ts-ignore
  return await client.getVpcLinks(input, ...args);
};
export async function* paginateGetVpcLinks(
  config: APIGatewayPaginationConfiguration,
  input: GetVpcLinksCommandInput,
  ...additionalArguments: any
): Paginator<GetVpcLinksCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetVpcLinksCommandOutput;
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
