import { SSM } from "../SSM.ts";
import { SSMClient } from "../SSMClient.ts";
import {
  ListAssociationsCommand,
  ListAssociationsCommandInput,
  ListAssociationsCommandOutput,
} from "../commands/ListAssociationsCommand.ts";
import { SSMPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: SSMClient,
  input: ListAssociationsCommandInput,
  ...args: any
): Promise<ListAssociationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAssociationsCommand(input, ...args));
};
const makePagedRequest = async (
  client: SSM,
  input: ListAssociationsCommandInput,
  ...args: any
): Promise<ListAssociationsCommandOutput> => {
  // @ts-ignore
  return await client.listAssociations(input, ...args);
};
export async function* listAssociationsPaginate(
  config: SSMPaginationConfiguration,
  input: ListAssociationsCommandInput,
  ...additionalArguments: any
): Paginator<ListAssociationsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListAssociationsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SSM) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SSMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SSM | SSMClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
