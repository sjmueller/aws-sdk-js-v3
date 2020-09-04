import { Organizations } from "../Organizations.ts";
import { OrganizationsClient } from "../OrganizationsClient.ts";
import {
  ListHandshakesForOrganizationCommand,
  ListHandshakesForOrganizationCommandInput,
  ListHandshakesForOrganizationCommandOutput,
} from "../commands/ListHandshakesForOrganizationCommand.ts";
import { OrganizationsPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: OrganizationsClient,
  input: ListHandshakesForOrganizationCommandInput,
  ...args: any
): Promise<ListHandshakesForOrganizationCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListHandshakesForOrganizationCommand(input, ...args));
};
const makePagedRequest = async (
  client: Organizations,
  input: ListHandshakesForOrganizationCommandInput,
  ...args: any
): Promise<ListHandshakesForOrganizationCommandOutput> => {
  // @ts-ignore
  return await client.listHandshakesForOrganization(input, ...args);
};
export async function* listHandshakesForOrganizationPaginate(
  config: OrganizationsPaginationConfiguration,
  input: ListHandshakesForOrganizationCommandInput,
  ...additionalArguments: any
): Paginator<ListHandshakesForOrganizationCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListHandshakesForOrganizationCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Organizations) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof OrganizationsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Organizations | OrganizationsClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
