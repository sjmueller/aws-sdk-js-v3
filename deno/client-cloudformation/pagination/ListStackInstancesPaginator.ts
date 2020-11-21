
import { CloudFormation } from "../CloudFormation.ts";
import { CloudFormationClient } from "../CloudFormationClient.ts";
import {
  ListStackInstancesCommand,
  ListStackInstancesCommandInput,
  ListStackInstancesCommandOutput,
} from "../commands/ListStackInstancesCommand.ts";
import { CloudFormationPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: CloudFormationClient,
  input: ListStackInstancesCommandInput,
  ...args: any
): Promise<ListStackInstancesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListStackInstancesCommand(input), ...args);
};
const makePagedRequest = async (
  client: CloudFormation,
  input: ListStackInstancesCommandInput,
  ...args: any
): Promise<ListStackInstancesCommandOutput> => {
  // @ts-ignore
  return await client.listStackInstances(input, ...args);
};
export async function* paginateListStackInstances(
  config: CloudFormationPaginationConfiguration,
  input: ListStackInstancesCommandInput,
  ...additionalArguments: any
): Paginator<ListStackInstancesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListStackInstancesCommandOutput;
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
