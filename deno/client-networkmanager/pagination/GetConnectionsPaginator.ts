import { NetworkManager } from "../NetworkManager.ts";
import { NetworkManagerClient } from "../NetworkManagerClient.ts";
import {
  GetConnectionsCommand,
  GetConnectionsCommandInput,
  GetConnectionsCommandOutput,
} from "../commands/GetConnectionsCommand.ts";
import { NetworkManagerPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: NetworkManagerClient,
  input: GetConnectionsCommandInput,
  ...args: any
): Promise<GetConnectionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetConnectionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: NetworkManager,
  input: GetConnectionsCommandInput,
  ...args: any
): Promise<GetConnectionsCommandOutput> => {
  // @ts-ignore
  return await client.getConnections(input, ...args);
};
export async function* paginateGetConnections(
  config: NetworkManagerPaginationConfiguration,
  input: GetConnectionsCommandInput,
  ...additionalArguments: any
): Paginator<GetConnectionsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetConnectionsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof NetworkManager) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof NetworkManagerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected NetworkManager | NetworkManagerClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
