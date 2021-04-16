import { AccessAnalyzer } from "../AccessAnalyzer.ts";
import { AccessAnalyzerClient } from "../AccessAnalyzerClient.ts";
import {
  ListAccessPreviewFindingsCommand,
  ListAccessPreviewFindingsCommandInput,
  ListAccessPreviewFindingsCommandOutput,
} from "../commands/ListAccessPreviewFindingsCommand.ts";
import { AccessAnalyzerPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: AccessAnalyzerClient,
  input: ListAccessPreviewFindingsCommandInput,
  ...args: any
): Promise<ListAccessPreviewFindingsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAccessPreviewFindingsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: AccessAnalyzer,
  input: ListAccessPreviewFindingsCommandInput,
  ...args: any
): Promise<ListAccessPreviewFindingsCommandOutput> => {
  // @ts-ignore
  return await client.listAccessPreviewFindings(input, ...args);
};
export async function* paginateListAccessPreviewFindings(
  config: AccessAnalyzerPaginationConfiguration,
  input: ListAccessPreviewFindingsCommandInput,
  ...additionalArguments: any
): Paginator<ListAccessPreviewFindingsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAccessPreviewFindingsCommandOutput;
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
