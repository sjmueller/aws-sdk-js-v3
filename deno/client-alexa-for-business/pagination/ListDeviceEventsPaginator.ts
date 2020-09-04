import { AlexaForBusiness } from "../AlexaForBusiness.ts";
import { AlexaForBusinessClient } from "../AlexaForBusinessClient.ts";
import {
  ListDeviceEventsCommand,
  ListDeviceEventsCommandInput,
  ListDeviceEventsCommandOutput,
} from "../commands/ListDeviceEventsCommand.ts";
import { AlexaForBusinessPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: AlexaForBusinessClient,
  input: ListDeviceEventsCommandInput,
  ...args: any
): Promise<ListDeviceEventsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDeviceEventsCommand(input, ...args));
};
const makePagedRequest = async (
  client: AlexaForBusiness,
  input: ListDeviceEventsCommandInput,
  ...args: any
): Promise<ListDeviceEventsCommandOutput> => {
  // @ts-ignore
  return await client.listDeviceEvents(input, ...args);
};
export async function* listDeviceEventsPaginate(
  config: AlexaForBusinessPaginationConfiguration,
  input: ListDeviceEventsCommandInput,
  ...additionalArguments: any
): Paginator<ListDeviceEventsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListDeviceEventsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof AlexaForBusiness) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof AlexaForBusinessClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected AlexaForBusiness | AlexaForBusinessClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
