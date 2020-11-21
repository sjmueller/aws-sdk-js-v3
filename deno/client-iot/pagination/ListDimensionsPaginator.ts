
import { IoT } from "../IoT.ts";
import { IoTClient } from "../IoTClient.ts";
import {
  ListDimensionsCommand,
  ListDimensionsCommandInput,
  ListDimensionsCommandOutput,
} from "../commands/ListDimensionsCommand.ts";
import { IoTPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: IoTClient,
  input: ListDimensionsCommandInput,
  ...args: any
): Promise<ListDimensionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDimensionsCommand(input), ...args);
};
const makePagedRequest = async (
  client: IoT,
  input: ListDimensionsCommandInput,
  ...args: any
): Promise<ListDimensionsCommandOutput> => {
  // @ts-ignore
  return await client.listDimensions(input, ...args);
};
export async function* paginateListDimensions(
  config: IoTPaginationConfiguration,
  input: ListDimensionsCommandInput,
  ...additionalArguments: any
): Paginator<ListDimensionsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDimensionsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof IoT) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IoTClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IoT | IoTClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
