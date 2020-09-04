import { Organizations } from "../Organizations.ts";
import { OrganizationsClient } from "../OrganizationsClient.ts";
import {
  ListOrganizationalUnitsForParentCommand,
  ListOrganizationalUnitsForParentCommandInput,
  ListOrganizationalUnitsForParentCommandOutput,
} from "../commands/ListOrganizationalUnitsForParentCommand.ts";
import { OrganizationsPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: OrganizationsClient,
  input: ListOrganizationalUnitsForParentCommandInput,
  ...args: any
): Promise<ListOrganizationalUnitsForParentCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListOrganizationalUnitsForParentCommand(input, ...args));
};
const makePagedRequest = async (
  client: Organizations,
  input: ListOrganizationalUnitsForParentCommandInput,
  ...args: any
): Promise<ListOrganizationalUnitsForParentCommandOutput> => {
  // @ts-ignore
  return await client.listOrganizationalUnitsForParent(input, ...args);
};
export async function* listOrganizationalUnitsForParentPaginate(
  config: OrganizationsPaginationConfiguration,
  input: ListOrganizationalUnitsForParentCommandInput,
  ...additionalArguments: any
): Paginator<ListOrganizationalUnitsForParentCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListOrganizationalUnitsForParentCommandOutput;
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
