
import { RAM } from "../RAM.ts";
import { RAMClient } from "../RAMClient.ts";
import {
  ListPendingInvitationResourcesCommand,
  ListPendingInvitationResourcesCommandInput,
  ListPendingInvitationResourcesCommandOutput,
} from "../commands/ListPendingInvitationResourcesCommand.ts";
import { RAMPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: RAMClient,
  input: ListPendingInvitationResourcesCommandInput,
  ...args: any
): Promise<ListPendingInvitationResourcesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPendingInvitationResourcesCommand(input), ...args);
};
const makePagedRequest = async (
  client: RAM,
  input: ListPendingInvitationResourcesCommandInput,
  ...args: any
): Promise<ListPendingInvitationResourcesCommandOutput> => {
  // @ts-ignore
  return await client.listPendingInvitationResources(input, ...args);
};
export async function* paginateListPendingInvitationResources(
  config: RAMPaginationConfiguration,
  input: ListPendingInvitationResourcesCommandInput,
  ...additionalArguments: any
): Paginator<ListPendingInvitationResourcesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPendingInvitationResourcesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof RAM) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof RAMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected RAM | RAMClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
