
import { SSM } from "../SSM.ts";
import { SSMClient } from "../SSMClient.ts";
import {
  DescribeSessionsCommand,
  DescribeSessionsCommandInput,
  DescribeSessionsCommandOutput,
} from "../commands/DescribeSessionsCommand.ts";
import { SSMPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: SSMClient,
  input: DescribeSessionsCommandInput,
  ...args: any
): Promise<DescribeSessionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeSessionsCommand(input), ...args);
};
const makePagedRequest = async (
  client: SSM,
  input: DescribeSessionsCommandInput,
  ...args: any
): Promise<DescribeSessionsCommandOutput> => {
  // @ts-ignore
  return await client.describeSessions(input, ...args);
};
export async function* paginateDescribeSessions(
  config: SSMPaginationConfiguration,
  input: DescribeSessionsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeSessionsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeSessionsCommandOutput;
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
