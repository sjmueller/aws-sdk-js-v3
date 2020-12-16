import { EC2 } from "../EC2.ts";
import { EC2Client } from "../EC2Client.ts";
import {
  DescribeInstanceTypesCommand,
  DescribeInstanceTypesCommandInput,
  DescribeInstanceTypesCommandOutput,
} from "../commands/DescribeInstanceTypesCommand.ts";
import { EC2PaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: EC2Client,
  input: DescribeInstanceTypesCommandInput,
  ...args: any
): Promise<DescribeInstanceTypesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeInstanceTypesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: EC2,
  input: DescribeInstanceTypesCommandInput,
  ...args: any
): Promise<DescribeInstanceTypesCommandOutput> => {
  // @ts-ignore
  return await client.describeInstanceTypes(input, ...args);
};
export async function* paginateDescribeInstanceTypes(
  config: EC2PaginationConfiguration,
  input: DescribeInstanceTypesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeInstanceTypesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeInstanceTypesCommandOutput;
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
