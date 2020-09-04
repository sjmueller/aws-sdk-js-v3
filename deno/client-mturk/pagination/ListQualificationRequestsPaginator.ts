import { MTurk } from "../MTurk.ts";
import { MTurkClient } from "../MTurkClient.ts";
import {
  ListQualificationRequestsCommand,
  ListQualificationRequestsCommandInput,
  ListQualificationRequestsCommandOutput,
} from "../commands/ListQualificationRequestsCommand.ts";
import { MTurkPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: MTurkClient,
  input: ListQualificationRequestsCommandInput,
  ...args: any
): Promise<ListQualificationRequestsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListQualificationRequestsCommand(input, ...args));
};
const makePagedRequest = async (
  client: MTurk,
  input: ListQualificationRequestsCommandInput,
  ...args: any
): Promise<ListQualificationRequestsCommandOutput> => {
  // @ts-ignore
  return await client.listQualificationRequests(input, ...args);
};
export async function* listQualificationRequestsPaginate(
  config: MTurkPaginationConfiguration,
  input: ListQualificationRequestsCommandInput,
  ...additionalArguments: any
): Paginator<ListQualificationRequestsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListQualificationRequestsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof MTurk) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof MTurkClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected MTurk | MTurkClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
