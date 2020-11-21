
import { QuickSight } from "../QuickSight.ts";
import { QuickSightClient } from "../QuickSightClient.ts";
import {
  ListTemplateVersionsCommand,
  ListTemplateVersionsCommandInput,
  ListTemplateVersionsCommandOutput,
} from "../commands/ListTemplateVersionsCommand.ts";
import { QuickSightPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: QuickSightClient,
  input: ListTemplateVersionsCommandInput,
  ...args: any
): Promise<ListTemplateVersionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTemplateVersionsCommand(input), ...args);
};
const makePagedRequest = async (
  client: QuickSight,
  input: ListTemplateVersionsCommandInput,
  ...args: any
): Promise<ListTemplateVersionsCommandOutput> => {
  // @ts-ignore
  return await client.listTemplateVersions(input, ...args);
};
export async function* paginateListTemplateVersions(
  config: QuickSightPaginationConfiguration,
  input: ListTemplateVersionsCommandInput,
  ...additionalArguments: any
): Paginator<ListTemplateVersionsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListTemplateVersionsCommandOutput;
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
