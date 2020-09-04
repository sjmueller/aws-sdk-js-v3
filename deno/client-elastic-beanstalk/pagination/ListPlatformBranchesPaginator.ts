import { ElasticBeanstalk } from "../ElasticBeanstalk.ts";
import { ElasticBeanstalkClient } from "../ElasticBeanstalkClient.ts";
import {
  ListPlatformBranchesCommand,
  ListPlatformBranchesCommandInput,
  ListPlatformBranchesCommandOutput,
} from "../commands/ListPlatformBranchesCommand.ts";
import { ElasticBeanstalkPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: ElasticBeanstalkClient,
  input: ListPlatformBranchesCommandInput,
  ...args: any
): Promise<ListPlatformBranchesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPlatformBranchesCommand(input, ...args));
};
const makePagedRequest = async (
  client: ElasticBeanstalk,
  input: ListPlatformBranchesCommandInput,
  ...args: any
): Promise<ListPlatformBranchesCommandOutput> => {
  // @ts-ignore
  return await client.listPlatformBranches(input, ...args);
};
export async function* listPlatformBranchesPaginate(
  config: ElasticBeanstalkPaginationConfiguration,
  input: ListPlatformBranchesCommandInput,
  ...additionalArguments: any
): Paginator<ListPlatformBranchesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListPlatformBranchesCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof ElasticBeanstalk) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ElasticBeanstalkClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ElasticBeanstalk | ElasticBeanstalkClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
