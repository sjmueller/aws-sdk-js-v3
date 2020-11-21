
import { Shield } from "../Shield.ts";
import { ShieldClient } from "../ShieldClient.ts";
import {
  ListResourcesInProtectionGroupCommand,
  ListResourcesInProtectionGroupCommandInput,
  ListResourcesInProtectionGroupCommandOutput,
} from "../commands/ListResourcesInProtectionGroupCommand.ts";
import { ShieldPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: ShieldClient,
  input: ListResourcesInProtectionGroupCommandInput,
  ...args: any
): Promise<ListResourcesInProtectionGroupCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListResourcesInProtectionGroupCommand(input), ...args);
};
const makePagedRequest = async (
  client: Shield,
  input: ListResourcesInProtectionGroupCommandInput,
  ...args: any
): Promise<ListResourcesInProtectionGroupCommandOutput> => {
  // @ts-ignore
  return await client.listResourcesInProtectionGroup(input, ...args);
};
export async function* paginateListResourcesInProtectionGroup(
  config: ShieldPaginationConfiguration,
  input: ListResourcesInProtectionGroupCommandInput,
  ...additionalArguments: any
): Paginator<ListResourcesInProtectionGroupCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListResourcesInProtectionGroupCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Shield) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ShieldClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Shield | ShieldClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
