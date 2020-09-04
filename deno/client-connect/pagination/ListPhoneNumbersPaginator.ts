import { Connect } from "../Connect.ts";
import { ConnectClient } from "../ConnectClient.ts";
import {
  ListPhoneNumbersCommand,
  ListPhoneNumbersCommandInput,
  ListPhoneNumbersCommandOutput,
} from "../commands/ListPhoneNumbersCommand.ts";
import { ConnectPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: ConnectClient,
  input: ListPhoneNumbersCommandInput,
  ...args: any
): Promise<ListPhoneNumbersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPhoneNumbersCommand(input, ...args));
};
const makePagedRequest = async (
  client: Connect,
  input: ListPhoneNumbersCommandInput,
  ...args: any
): Promise<ListPhoneNumbersCommandOutput> => {
  // @ts-ignore
  return await client.listPhoneNumbers(input, ...args);
};
export async function* listPhoneNumbersPaginate(
  config: ConnectPaginationConfiguration,
  input: ListPhoneNumbersCommandInput,
  ...additionalArguments: any
): Paginator<ListPhoneNumbersCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListPhoneNumbersCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Connect) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ConnectClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Connect | ConnectClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
