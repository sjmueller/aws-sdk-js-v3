import { QuickSight } from "../QuickSight.ts";
import { QuickSightClient } from "../QuickSightClient.ts";
import {
  ListThemeVersionsCommand,
  ListThemeVersionsCommandInput,
  ListThemeVersionsCommandOutput,
} from "../commands/ListThemeVersionsCommand.ts";
import { QuickSightPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: QuickSightClient,
  input: ListThemeVersionsCommandInput,
  ...args: any
): Promise<ListThemeVersionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListThemeVersionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: QuickSight,
  input: ListThemeVersionsCommandInput,
  ...args: any
): Promise<ListThemeVersionsCommandOutput> => {
  // @ts-ignore
  return await client.listThemeVersions(input, ...args);
};
export async function* paginateListThemeVersions(
  config: QuickSightPaginationConfiguration,
  input: ListThemeVersionsCommandInput,
  ...additionalArguments: any
): Paginator<ListThemeVersionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListThemeVersionsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof QuickSight) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof QuickSightClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected QuickSight | QuickSightClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
