import { AccessAnalyzer } from "../AccessAnalyzer.ts";
import { AccessAnalyzerClient } from "../AccessAnalyzerClient.ts";
import {
  ListAnalyzedResourcesCommand,
  ListAnalyzedResourcesCommandInput,
  ListAnalyzedResourcesCommandOutput,
} from "../commands/ListAnalyzedResourcesCommand.ts";
import { AccessAnalyzerPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: AccessAnalyzerClient,
  input: ListAnalyzedResourcesCommandInput,
  ...args: any
): Promise<ListAnalyzedResourcesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAnalyzedResourcesCommand(input), ...args);
};
const makePagedRequest = async (
  client: AccessAnalyzer,
  input: ListAnalyzedResourcesCommandInput,
  ...args: any
): Promise<ListAnalyzedResourcesCommandOutput> => {
  // @ts-ignore
  return await client.listAnalyzedResources(input, ...args);
};
export async function* paginateListAnalyzedResources(
  config: AccessAnalyzerPaginationConfiguration,
  input: ListAnalyzedResourcesCommandInput,
  ...additionalArguments: any
): Paginator<ListAnalyzedResourcesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAnalyzedResourcesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof AccessAnalyzer) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof AccessAnalyzerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected AccessAnalyzer | AccessAnalyzerClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
