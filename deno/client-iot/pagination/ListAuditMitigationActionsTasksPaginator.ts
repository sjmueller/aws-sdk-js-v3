
import { IoT } from "../IoT.ts";
import { IoTClient } from "../IoTClient.ts";
import {
  ListAuditMitigationActionsTasksCommand,
  ListAuditMitigationActionsTasksCommandInput,
  ListAuditMitigationActionsTasksCommandOutput,
} from "../commands/ListAuditMitigationActionsTasksCommand.ts";
import { IoTPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: IoTClient,
  input: ListAuditMitigationActionsTasksCommandInput,
  ...args: any
): Promise<ListAuditMitigationActionsTasksCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAuditMitigationActionsTasksCommand(input), ...args);
};
const makePagedRequest = async (
  client: IoT,
  input: ListAuditMitigationActionsTasksCommandInput,
  ...args: any
): Promise<ListAuditMitigationActionsTasksCommandOutput> => {
  // @ts-ignore
  return await client.listAuditMitigationActionsTasks(input, ...args);
};
export async function* paginateListAuditMitigationActionsTasks(
  config: IoTPaginationConfiguration,
  input: ListAuditMitigationActionsTasksCommandInput,
  ...additionalArguments: any
): Paginator<ListAuditMitigationActionsTasksCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAuditMitigationActionsTasksCommandOutput;
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
