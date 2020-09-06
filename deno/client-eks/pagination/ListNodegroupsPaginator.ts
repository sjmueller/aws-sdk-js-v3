
import { EKS } from "../EKS.ts";
import { EKSClient } from "../EKSClient.ts";
import {
  ListNodegroupsCommand,
  ListNodegroupsCommandInput,
  ListNodegroupsCommandOutput,
} from "../commands/ListNodegroupsCommand.ts";
import { EKSPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: EKSClient,
  input: ListNodegroupsCommandInput,
  ...args: any
): Promise<ListNodegroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListNodegroupsCommand(input, ...args));
};
const makePagedRequest = async (
  client: EKS,
  input: ListNodegroupsCommandInput,
  ...args: any
): Promise<ListNodegroupsCommandOutput> => {
  // @ts-ignore
  return await client.listNodegroups(input, ...args);
};
export async function* listNodegroupsPaginate(
  config: EKSPaginationConfiguration,
  input: ListNodegroupsCommandInput,
  ...additionalArguments: any
): Paginator<ListNodegroupsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListNodegroupsCommandOutput;
  while (hasNext) {
    input["nextToken"] = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof EKS) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof EKSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected EKS | EKSClient");
    }
    yield page;
    token = page["nextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
