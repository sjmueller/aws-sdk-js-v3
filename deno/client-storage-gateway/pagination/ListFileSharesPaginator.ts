import { StorageGateway } from "../StorageGateway.ts";
import { StorageGatewayClient } from "../StorageGatewayClient.ts";
import {
  ListFileSharesCommand,
  ListFileSharesCommandInput,
  ListFileSharesCommandOutput,
} from "../commands/ListFileSharesCommand.ts";
import { StorageGatewayPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: StorageGatewayClient,
  input: ListFileSharesCommandInput,
  ...args: any
): Promise<ListFileSharesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListFileSharesCommand(input, ...args));
};
const makePagedRequest = async (
  client: StorageGateway,
  input: ListFileSharesCommandInput,
  ...args: any
): Promise<ListFileSharesCommandOutput> => {
  // @ts-ignore
  return await client.listFileShares(input, ...args);
};
export async function* listFileSharesPaginate(
  config: StorageGatewayPaginationConfiguration,
  input: ListFileSharesCommandInput,
  ...additionalArguments: any
): Paginator<ListFileSharesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListFileSharesCommandOutput;
  while (hasNext) {
    input["Marker"] = token;
    input["Limit"] = config.pageSize;
    if (config.client instanceof StorageGateway) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof StorageGatewayClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected StorageGateway | StorageGatewayClient");
    }
    yield page;
    token = page["NextMarker"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
