
import { Chime } from "../Chime.ts";
import { ChimeClient } from "../ChimeClient.ts";
import {
  ListPhoneNumberOrdersCommand,
  ListPhoneNumberOrdersCommandInput,
  ListPhoneNumberOrdersCommandOutput,
} from "../commands/ListPhoneNumberOrdersCommand.ts";
import { ChimePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: ChimeClient,
  input: ListPhoneNumberOrdersCommandInput,
  ...args: any
): Promise<ListPhoneNumberOrdersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPhoneNumberOrdersCommand(input, ...args));
};
const makePagedRequest = async (
  client: Chime,
  input: ListPhoneNumberOrdersCommandInput,
  ...args: any
): Promise<ListPhoneNumberOrdersCommandOutput> => {
  // @ts-ignore
  return await client.listPhoneNumberOrders(input, ...args);
};
export async function* listPhoneNumberOrdersPaginate(
  config: ChimePaginationConfiguration,
  input: ListPhoneNumberOrdersCommandInput,
  ...additionalArguments: any
): Paginator<ListPhoneNumberOrdersCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListPhoneNumberOrdersCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Chime) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ChimeClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Chime | ChimeClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
