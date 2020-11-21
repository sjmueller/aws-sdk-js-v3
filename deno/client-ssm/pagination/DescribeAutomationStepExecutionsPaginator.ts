
import { SSM } from "../SSM.ts";
import { SSMClient } from "../SSMClient.ts";
import {
  DescribeAutomationStepExecutionsCommand,
  DescribeAutomationStepExecutionsCommandInput,
  DescribeAutomationStepExecutionsCommandOutput,
} from "../commands/DescribeAutomationStepExecutionsCommand.ts";
import { SSMPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: SSMClient,
  input: DescribeAutomationStepExecutionsCommandInput,
  ...args: any
): Promise<DescribeAutomationStepExecutionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeAutomationStepExecutionsCommand(input), ...args);
};
const makePagedRequest = async (
  client: SSM,
  input: DescribeAutomationStepExecutionsCommandInput,
  ...args: any
): Promise<DescribeAutomationStepExecutionsCommandOutput> => {
  // @ts-ignore
  return await client.describeAutomationStepExecutions(input, ...args);
};
export async function* paginateDescribeAutomationStepExecutions(
  config: SSMPaginationConfiguration,
  input: DescribeAutomationStepExecutionsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeAutomationStepExecutionsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeAutomationStepExecutionsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SSM) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SSMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SSM | SSMClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
