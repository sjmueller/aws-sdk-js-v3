import { Inspector } from "../Inspector.ts";
import { InspectorClient } from "../InspectorClient.ts";
import {
  ListRulesPackagesCommand,
  ListRulesPackagesCommandInput,
  ListRulesPackagesCommandOutput,
} from "../commands/ListRulesPackagesCommand.ts";
import { InspectorPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: InspectorClient,
  input: ListRulesPackagesCommandInput,
  ...args: any
): Promise<ListRulesPackagesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRulesPackagesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Inspector,
  input: ListRulesPackagesCommandInput,
  ...args: any
): Promise<ListRulesPackagesCommandOutput> => {
  // @ts-ignore
  return await client.listRulesPackages(input, ...args);
};
export async function* paginateListRulesPackages(
  config: InspectorPaginationConfiguration,
  input: ListRulesPackagesCommandInput,
  ...additionalArguments: any
): Paginator<ListRulesPackagesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListRulesPackagesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Inspector) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof InspectorClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Inspector | InspectorClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
