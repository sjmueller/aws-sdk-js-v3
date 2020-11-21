
import { IoT } from "../IoT.ts";
import { IoTClient } from "../IoTClient.ts";
import {
  ListAuditFindingsCommand,
  ListAuditFindingsCommandInput,
  ListAuditFindingsCommandOutput,
} from "../commands/ListAuditFindingsCommand.ts";
import { IoTPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: IoTClient,
  input: ListAuditFindingsCommandInput,
  ...args: any
): Promise<ListAuditFindingsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAuditFindingsCommand(input), ...args);
};
const makePagedRequest = async (
  client: IoT,
  input: ListAuditFindingsCommandInput,
  ...args: any
): Promise<ListAuditFindingsCommandOutput> => {
  // @ts-ignore
  return await client.listAuditFindings(input, ...args);
};
export async function* paginateListAuditFindings(
  config: IoTPaginationConfiguration,
  input: ListAuditFindingsCommandInput,
  ...additionalArguments: any
): Paginator<ListAuditFindingsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAuditFindingsCommandOutput;
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
