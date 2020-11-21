
import { RAM } from "../RAM.ts";
import { RAMClient } from "../RAMClient.ts";
import {
  GetResourceShareInvitationsCommand,
  GetResourceShareInvitationsCommandInput,
  GetResourceShareInvitationsCommandOutput,
} from "../commands/GetResourceShareInvitationsCommand.ts";
import { RAMPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: RAMClient,
  input: GetResourceShareInvitationsCommandInput,
  ...args: any
): Promise<GetResourceShareInvitationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetResourceShareInvitationsCommand(input), ...args);
};
const makePagedRequest = async (
  client: RAM,
  input: GetResourceShareInvitationsCommandInput,
  ...args: any
): Promise<GetResourceShareInvitationsCommandOutput> => {
  // @ts-ignore
  return await client.getResourceShareInvitations(input, ...args);
};
export async function* paginateGetResourceShareInvitations(
  config: RAMPaginationConfiguration,
  input: GetResourceShareInvitationsCommandInput,
  ...additionalArguments: any
): Paginator<GetResourceShareInvitationsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetResourceShareInvitationsCommandOutput;
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
