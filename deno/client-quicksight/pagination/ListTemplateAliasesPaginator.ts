import { QuickSight } from "../QuickSight.ts";
import { QuickSightClient } from "../QuickSightClient.ts";
import {
  ListTemplateAliasesCommand,
  ListTemplateAliasesCommandInput,
  ListTemplateAliasesCommandOutput,
} from "../commands/ListTemplateAliasesCommand.ts";
import { QuickSightPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: QuickSightClient,
  input: ListTemplateAliasesCommandInput,
  ...args: any
): Promise<ListTemplateAliasesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTemplateAliasesCommand(input, ...args));
};
const makePagedRequest = async (
  client: QuickSight,
  input: ListTemplateAliasesCommandInput,
  ...args: any
): Promise<ListTemplateAliasesCommandOutput> => {
  // @ts-ignore
  return await client.listTemplateAliases(input, ...args);
};
export async function* listTemplateAliasesPaginate(
  config: QuickSightPaginationConfiguration,
  input: ListTemplateAliasesCommandInput,
  ...additionalArguments: any
): Paginator<ListTemplateAliasesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListTemplateAliasesCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof QuickSight) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof QuickSightClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected QuickSight | QuickSightClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
