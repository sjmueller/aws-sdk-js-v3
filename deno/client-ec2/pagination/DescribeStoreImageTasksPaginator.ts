import { EC2 } from "../EC2.ts";
import { EC2Client } from "../EC2Client.ts";
import {
  DescribeStoreImageTasksCommand,
  DescribeStoreImageTasksCommandInput,
  DescribeStoreImageTasksCommandOutput,
} from "../commands/DescribeStoreImageTasksCommand.ts";
import { EC2PaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: EC2Client,
  input: DescribeStoreImageTasksCommandInput,
  ...args: any
): Promise<DescribeStoreImageTasksCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeStoreImageTasksCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: EC2,
  input: DescribeStoreImageTasksCommandInput,
  ...args: any
): Promise<DescribeStoreImageTasksCommandOutput> => {
  // @ts-ignore
  return await client.describeStoreImageTasks(input, ...args);
};
export async function* paginateDescribeStoreImageTasks(
  config: EC2PaginationConfiguration,
  input: DescribeStoreImageTasksCommandInput,
  ...additionalArguments: any
): Paginator<DescribeStoreImageTasksCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeStoreImageTasksCommandOutput;
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
