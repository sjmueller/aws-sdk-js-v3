import { QuickSight } from "../QuickSight.ts";
import { QuickSightClient } from "../QuickSightClient.ts";
import { ListThemesCommand, ListThemesCommandInput, ListThemesCommandOutput } from "../commands/ListThemesCommand.ts";
import { QuickSightPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: QuickSightClient,
  input: ListThemesCommandInput,
  ...args: any
): Promise<ListThemesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListThemesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: QuickSight,
  input: ListThemesCommandInput,
  ...args: any
): Promise<ListThemesCommandOutput> => {
  // @ts-ignore
  return await client.listThemes(input, ...args);
};
export async function* paginateListThemes(
  config: QuickSightPaginationConfiguration,
  input: ListThemesCommandInput,
  ...additionalArguments: any
): Paginator<ListThemesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListThemesCommandOutput;
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
