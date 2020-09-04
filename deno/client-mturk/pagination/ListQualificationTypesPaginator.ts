import { MTurk } from "../MTurk.ts";
import { MTurkClient } from "../MTurkClient.ts";
import {
  ListQualificationTypesCommand,
  ListQualificationTypesCommandInput,
  ListQualificationTypesCommandOutput,
} from "../commands/ListQualificationTypesCommand.ts";
import { MTurkPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: MTurkClient,
  input: ListQualificationTypesCommandInput,
  ...args: any
): Promise<ListQualificationTypesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListQualificationTypesCommand(input, ...args));
};
const makePagedRequest = async (
  client: MTurk,
  input: ListQualificationTypesCommandInput,
  ...args: any
): Promise<ListQualificationTypesCommandOutput> => {
  // @ts-ignore
  return await client.listQualificationTypes(input, ...args);
};
export async function* listQualificationTypesPaginate(
  config: MTurkPaginationConfiguration,
  input: ListQualificationTypesCommandInput,
  ...additionalArguments: any
): Paginator<ListQualificationTypesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListQualificationTypesCommandOutput;
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
