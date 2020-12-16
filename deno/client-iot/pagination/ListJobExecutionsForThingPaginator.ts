import { IoT } from "../IoT.ts";
import { IoTClient } from "../IoTClient.ts";
import {
  ListJobExecutionsForThingCommand,
  ListJobExecutionsForThingCommandInput,
  ListJobExecutionsForThingCommandOutput,
} from "../commands/ListJobExecutionsForThingCommand.ts";
import { IoTPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IoTClient,
  input: ListJobExecutionsForThingCommandInput,
  ...args: any
): Promise<ListJobExecutionsForThingCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListJobExecutionsForThingCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: IoT,
  input: ListJobExecutionsForThingCommandInput,
  ...args: any
): Promise<ListJobExecutionsForThingCommandOutput> => {
  // @ts-ignore
  return await client.listJobExecutionsForThing(input, ...args);
};
export async function* paginateListJobExecutionsForThing(
  config: IoTPaginationConfiguration,
  input: ListJobExecutionsForThingCommandInput,
  ...additionalArguments: any
): Paginator<ListJobExecutionsForThingCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListJobExecutionsForThingCommandOutput;
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
