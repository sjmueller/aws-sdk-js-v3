import { Honeycode } from "../Honeycode.ts";
import { HoneycodeClient } from "../HoneycodeClient.ts";
import {
  ListTableColumnsCommand,
  ListTableColumnsCommandInput,
  ListTableColumnsCommandOutput,
} from "../commands/ListTableColumnsCommand.ts";
import { HoneycodePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: HoneycodeClient,
  input: ListTableColumnsCommandInput,
  ...args: any
): Promise<ListTableColumnsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTableColumnsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Honeycode,
  input: ListTableColumnsCommandInput,
  ...args: any
): Promise<ListTableColumnsCommandOutput> => {
  // @ts-ignore
  return await client.listTableColumns(input, ...args);
};
export async function* paginateListTableColumns(
  config: HoneycodePaginationConfiguration,
  input: ListTableColumnsCommandInput,
  ...additionalArguments: any
): Paginator<ListTableColumnsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListTableColumnsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    if (config.client instanceof Honeycode) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof HoneycodeClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Honeycode | HoneycodeClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
