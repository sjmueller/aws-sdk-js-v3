import { Cloud9 } from "../Cloud9.ts";
import { Cloud9Client } from "../Cloud9Client.ts";
import {
  DescribeEnvironmentMembershipsCommand,
  DescribeEnvironmentMembershipsCommandInput,
  DescribeEnvironmentMembershipsCommandOutput,
} from "../commands/DescribeEnvironmentMembershipsCommand.ts";
import { Cloud9PaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: Cloud9Client,
  input: DescribeEnvironmentMembershipsCommandInput,
  ...args: any
): Promise<DescribeEnvironmentMembershipsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeEnvironmentMembershipsCommand(input, ...args));
};
const makePagedRequest = async (
  client: Cloud9,
  input: DescribeEnvironmentMembershipsCommandInput,
  ...args: any
): Promise<DescribeEnvironmentMembershipsCommandOutput> => {
  // @ts-ignore
  return await client.describeEnvironmentMemberships(input, ...args);
};
export async function* describeEnvironmentMembershipsPaginate(
  config: Cloud9PaginationConfiguration,
  input: DescribeEnvironmentMembershipsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeEnvironmentMembershipsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeEnvironmentMembershipsCommandOutput;
  while (hasNext) {
    input["nextToken"] = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Cloud9) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof Cloud9Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Cloud9 | Cloud9Client");
    }
    yield page;
    token = page["nextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
