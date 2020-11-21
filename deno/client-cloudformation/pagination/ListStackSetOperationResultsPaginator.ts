
import { CloudFormation } from "../CloudFormation.ts";
import { CloudFormationClient } from "../CloudFormationClient.ts";
import {
  ListStackSetOperationResultsCommand,
  ListStackSetOperationResultsCommandInput,
  ListStackSetOperationResultsCommandOutput,
} from "../commands/ListStackSetOperationResultsCommand.ts";
import { CloudFormationPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: CloudFormationClient,
  input: ListStackSetOperationResultsCommandInput,
  ...args: any
): Promise<ListStackSetOperationResultsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListStackSetOperationResultsCommand(input), ...args);
};
const makePagedRequest = async (
  client: CloudFormation,
  input: ListStackSetOperationResultsCommandInput,
  ...args: any
): Promise<ListStackSetOperationResultsCommandOutput> => {
  // @ts-ignore
  return await client.listStackSetOperationResults(input, ...args);
};
export async function* paginateListStackSetOperationResults(
  config: CloudFormationPaginationConfiguration,
  input: ListStackSetOperationResultsCommandInput,
  ...additionalArguments: any
): Paginator<ListStackSetOperationResultsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListStackSetOperationResultsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof CloudFormation) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CloudFormationClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CloudFormation | CloudFormationClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
