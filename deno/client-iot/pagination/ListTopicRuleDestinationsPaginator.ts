import { IoT } from "../IoT.ts";
import { IoTClient } from "../IoTClient.ts";
import {
  ListTopicRuleDestinationsCommand,
  ListTopicRuleDestinationsCommandInput,
  ListTopicRuleDestinationsCommandOutput,
} from "../commands/ListTopicRuleDestinationsCommand.ts";
import { IoTPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IoTClient,
  input: ListTopicRuleDestinationsCommandInput,
  ...args: any
): Promise<ListTopicRuleDestinationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTopicRuleDestinationsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: IoT,
  input: ListTopicRuleDestinationsCommandInput,
  ...args: any
): Promise<ListTopicRuleDestinationsCommandOutput> => {
  // @ts-ignore
  return await client.listTopicRuleDestinations(input, ...args);
};
export async function* paginateListTopicRuleDestinations(
  config: IoTPaginationConfiguration,
  input: ListTopicRuleDestinationsCommandInput,
  ...additionalArguments: any
): Paginator<ListTopicRuleDestinationsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListTopicRuleDestinationsCommandOutput;
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
