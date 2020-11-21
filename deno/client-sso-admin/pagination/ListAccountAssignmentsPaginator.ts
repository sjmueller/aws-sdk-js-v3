
import { SSOAdmin } from "../SSOAdmin.ts";
import { SSOAdminClient } from "../SSOAdminClient.ts";
import {
  ListAccountAssignmentsCommand,
  ListAccountAssignmentsCommandInput,
  ListAccountAssignmentsCommandOutput,
} from "../commands/ListAccountAssignmentsCommand.ts";
import { SSOAdminPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: SSOAdminClient,
  input: ListAccountAssignmentsCommandInput,
  ...args: any
): Promise<ListAccountAssignmentsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAccountAssignmentsCommand(input), ...args);
};
const makePagedRequest = async (
  client: SSOAdmin,
  input: ListAccountAssignmentsCommandInput,
  ...args: any
): Promise<ListAccountAssignmentsCommandOutput> => {
  // @ts-ignore
  return await client.listAccountAssignments(input, ...args);
};
export async function* paginateListAccountAssignments(
  config: SSOAdminPaginationConfiguration,
  input: ListAccountAssignmentsCommandInput,
  ...additionalArguments: any
): Paginator<ListAccountAssignmentsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAccountAssignmentsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SSOAdmin) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SSOAdminClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SSOAdmin | SSOAdminClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
