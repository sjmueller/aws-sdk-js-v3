import { Fis } from "../Fis.ts";
import { FisClient } from "../FisClient.ts";
import { ListActionsCommand, ListActionsCommandInput, ListActionsCommandOutput } from "../commands/ListActionsCommand.ts";
import { FisPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: FisClient,
  input: ListActionsCommandInput,
  ...args: any
): Promise<ListActionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListActionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Fis,
  input: ListActionsCommandInput,
  ...args: any
): Promise<ListActionsCommandOutput> => {
  // @ts-ignore
  return await client.listActions(input, ...args);
};
export async function* paginateListActions(
  config: FisPaginationConfiguration,
  input: ListActionsCommandInput,
  ...additionalArguments: any
): Paginator<ListActionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListActionsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Fis) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof FisClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Fis | FisClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
