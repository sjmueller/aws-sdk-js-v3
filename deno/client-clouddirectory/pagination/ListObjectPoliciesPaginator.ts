
import { CloudDirectory } from "../CloudDirectory.ts";
import { CloudDirectoryClient } from "../CloudDirectoryClient.ts";
import {
  ListObjectPoliciesCommand,
  ListObjectPoliciesCommandInput,
  ListObjectPoliciesCommandOutput,
} from "../commands/ListObjectPoliciesCommand.ts";
import { CloudDirectoryPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: CloudDirectoryClient,
  input: ListObjectPoliciesCommandInput,
  ...args: any
): Promise<ListObjectPoliciesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListObjectPoliciesCommand(input, ...args));
};
const makePagedRequest = async (
  client: CloudDirectory,
  input: ListObjectPoliciesCommandInput,
  ...args: any
): Promise<ListObjectPoliciesCommandOutput> => {
  // @ts-ignore
  return await client.listObjectPolicies(input, ...args);
};
export async function* listObjectPoliciesPaginate(
  config: CloudDirectoryPaginationConfiguration,
  input: ListObjectPoliciesCommandInput,
  ...additionalArguments: any
): Paginator<ListObjectPoliciesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListObjectPoliciesCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof CloudDirectory) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CloudDirectoryClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CloudDirectory | CloudDirectoryClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
