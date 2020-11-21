
import { DataExchange } from "../DataExchange.ts";
import { DataExchangeClient } from "../DataExchangeClient.ts";
import {
  ListRevisionAssetsCommand,
  ListRevisionAssetsCommandInput,
  ListRevisionAssetsCommandOutput,
} from "../commands/ListRevisionAssetsCommand.ts";
import { DataExchangePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: DataExchangeClient,
  input: ListRevisionAssetsCommandInput,
  ...args: any
): Promise<ListRevisionAssetsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRevisionAssetsCommand(input), ...args);
};
const makePagedRequest = async (
  client: DataExchange,
  input: ListRevisionAssetsCommandInput,
  ...args: any
): Promise<ListRevisionAssetsCommandOutput> => {
  // @ts-ignore
  return await client.listRevisionAssets(input, ...args);
};
export async function* paginateListRevisionAssets(
  config: DataExchangePaginationConfiguration,
  input: ListRevisionAssetsCommandInput,
  ...additionalArguments: any
): Paginator<ListRevisionAssetsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListRevisionAssetsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof DataExchange) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof DataExchangeClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DataExchange | DataExchangeClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
