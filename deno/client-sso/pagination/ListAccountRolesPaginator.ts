import { SSO } from "../SSO.ts";
import { SSOClient } from "../SSOClient.ts";
import {
  ListAccountRolesCommand,
  ListAccountRolesCommandInput,
  ListAccountRolesCommandOutput,
} from "../commands/ListAccountRolesCommand.ts";
import { SSOPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: SSOClient,
  input: ListAccountRolesCommandInput,
  ...args: any
): Promise<ListAccountRolesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAccountRolesCommand(input, ...args));
};
const makePagedRequest = async (
  client: SSO,
  input: ListAccountRolesCommandInput,
  ...args: any
): Promise<ListAccountRolesCommandOutput> => {
  // @ts-ignore
  return await client.listAccountRoles(input, ...args);
};
export async function* listAccountRolesPaginate(
  config: SSOPaginationConfiguration,
  input: ListAccountRolesCommandInput,
  ...additionalArguments: any
): Paginator<ListAccountRolesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListAccountRolesCommandOutput;
  while (hasNext) {
    input["nextToken"] = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof SSO) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SSOClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SSO | SSOClient");
    }
    yield page;
    token = page["nextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
