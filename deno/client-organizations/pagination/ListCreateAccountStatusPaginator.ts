import { Organizations } from "../Organizations.ts";
import { OrganizationsClient } from "../OrganizationsClient.ts";
import {
  ListCreateAccountStatusCommand,
  ListCreateAccountStatusCommandInput,
  ListCreateAccountStatusCommandOutput,
} from "../commands/ListCreateAccountStatusCommand.ts";
import { OrganizationsPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: OrganizationsClient,
  input: ListCreateAccountStatusCommandInput,
  ...args: any
): Promise<ListCreateAccountStatusCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListCreateAccountStatusCommand(input, ...args));
};
const makePagedRequest = async (
  client: Organizations,
  input: ListCreateAccountStatusCommandInput,
  ...args: any
): Promise<ListCreateAccountStatusCommandOutput> => {
  // @ts-ignore
  return await client.listCreateAccountStatus(input, ...args);
};
export async function* listCreateAccountStatusPaginate(
  config: OrganizationsPaginationConfiguration,
  input: ListCreateAccountStatusCommandInput,
  ...additionalArguments: any
): Paginator<ListCreateAccountStatusCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListCreateAccountStatusCommandOutput;
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
