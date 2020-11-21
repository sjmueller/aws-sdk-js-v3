
import { ElasticBeanstalk } from "../ElasticBeanstalk.ts";
import { ElasticBeanstalkClient } from "../ElasticBeanstalkClient.ts";
import {
  DescribeEnvironmentManagedActionHistoryCommand,
  DescribeEnvironmentManagedActionHistoryCommandInput,
  DescribeEnvironmentManagedActionHistoryCommandOutput,
} from "../commands/DescribeEnvironmentManagedActionHistoryCommand.ts";
import { ElasticBeanstalkPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: ElasticBeanstalkClient,
  input: DescribeEnvironmentManagedActionHistoryCommandInput,
  ...args: any
): Promise<DescribeEnvironmentManagedActionHistoryCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeEnvironmentManagedActionHistoryCommand(input), ...args);
};
const makePagedRequest = async (
  client: ElasticBeanstalk,
  input: DescribeEnvironmentManagedActionHistoryCommandInput,
  ...args: any
): Promise<DescribeEnvironmentManagedActionHistoryCommandOutput> => {
  // @ts-ignore
  return await client.describeEnvironmentManagedActionHistory(input, ...args);
};
export async function* paginateDescribeEnvironmentManagedActionHistory(
  config: ElasticBeanstalkPaginationConfiguration,
  input: DescribeEnvironmentManagedActionHistoryCommandInput,
  ...additionalArguments: any
): Paginator<DescribeEnvironmentManagedActionHistoryCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeEnvironmentManagedActionHistoryCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxItems"] = config.pageSize;
    if (config.client instanceof ElasticBeanstalk) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ElasticBeanstalkClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ElasticBeanstalk | ElasticBeanstalkClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
