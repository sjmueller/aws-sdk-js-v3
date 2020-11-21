
import { EC2 } from "../EC2.ts";
import { EC2Client } from "../EC2Client.ts";
import {
  DescribeCoipPoolsCommand,
  DescribeCoipPoolsCommandInput,
  DescribeCoipPoolsCommandOutput,
} from "../commands/DescribeCoipPoolsCommand.ts";
import { EC2PaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: EC2Client,
  input: DescribeCoipPoolsCommandInput,
  ...args: any
): Promise<DescribeCoipPoolsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeCoipPoolsCommand(input), ...args);
};
const makePagedRequest = async (
  client: EC2,
  input: DescribeCoipPoolsCommandInput,
  ...args: any
): Promise<DescribeCoipPoolsCommandOutput> => {
  // @ts-ignore
  return await client.describeCoipPools(input, ...args);
};
export async function* paginateDescribeCoipPools(
  config: EC2PaginationConfiguration,
  input: DescribeCoipPoolsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeCoipPoolsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeCoipPoolsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof EC2) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof EC2Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected EC2 | EC2Client");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
