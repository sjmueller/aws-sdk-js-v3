
import { SMS } from "../SMS.ts";
import { SMSClient } from "../SMSClient.ts";
import {
  GetConnectorsCommand,
  GetConnectorsCommandInput,
  GetConnectorsCommandOutput,
} from "../commands/GetConnectorsCommand.ts";
import { SMSPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: SMSClient,
  input: GetConnectorsCommandInput,
  ...args: any
): Promise<GetConnectorsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetConnectorsCommand(input), ...args);
};
const makePagedRequest = async (
  client: SMS,
  input: GetConnectorsCommandInput,
  ...args: any
): Promise<GetConnectorsCommandOutput> => {
  // @ts-ignore
  return await client.getConnectors(input, ...args);
};
export async function* paginateGetConnectors(
  config: SMSPaginationConfiguration,
  input: GetConnectorsCommandInput,
  ...additionalArguments: any
): Paginator<GetConnectorsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetConnectorsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof SMS) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SMSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SMS | SMSClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
