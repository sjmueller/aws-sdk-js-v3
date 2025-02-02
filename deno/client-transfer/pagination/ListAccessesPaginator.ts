import { Transfer } from "../Transfer.ts";
import { TransferClient } from "../TransferClient.ts";
import {
  ListAccessesCommand,
  ListAccessesCommandInput,
  ListAccessesCommandOutput,
} from "../commands/ListAccessesCommand.ts";
import { TransferPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: TransferClient,
  input: ListAccessesCommandInput,
  ...args: any
): Promise<ListAccessesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAccessesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Transfer,
  input: ListAccessesCommandInput,
  ...args: any
): Promise<ListAccessesCommandOutput> => {
  // @ts-ignore
  return await client.listAccesses(input, ...args);
};
export async function* paginateListAccesses(
  config: TransferPaginationConfiguration,
  input: ListAccessesCommandInput,
  ...additionalArguments: any
): Paginator<ListAccessesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAccessesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Transfer) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof TransferClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Transfer | TransferClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
