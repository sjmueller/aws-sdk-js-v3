
import { IoT } from "../IoT.ts";
import { IoTClient } from "../IoTClient.ts";
import {
  ListProvisioningTemplatesCommand,
  ListProvisioningTemplatesCommandInput,
  ListProvisioningTemplatesCommandOutput,
} from "../commands/ListProvisioningTemplatesCommand.ts";
import { IoTPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: IoTClient,
  input: ListProvisioningTemplatesCommandInput,
  ...args: any
): Promise<ListProvisioningTemplatesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListProvisioningTemplatesCommand(input), ...args);
};
const makePagedRequest = async (
  client: IoT,
  input: ListProvisioningTemplatesCommandInput,
  ...args: any
): Promise<ListProvisioningTemplatesCommandOutput> => {
  // @ts-ignore
  return await client.listProvisioningTemplates(input, ...args);
};
export async function* paginateListProvisioningTemplates(
  config: IoTPaginationConfiguration,
  input: ListProvisioningTemplatesCommandInput,
  ...additionalArguments: any
): Paginator<ListProvisioningTemplatesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListProvisioningTemplatesCommandOutput;
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
