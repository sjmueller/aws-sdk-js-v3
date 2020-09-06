
import { SSM } from "../SSM.ts";
import { SSMClient } from "../SSMClient.ts";
import {
  GetParameterHistoryCommand,
  GetParameterHistoryCommandInput,
  GetParameterHistoryCommandOutput,
} from "../commands/GetParameterHistoryCommand.ts";
import { SSMPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: SSMClient,
  input: GetParameterHistoryCommandInput,
  ...args: any
): Promise<GetParameterHistoryCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetParameterHistoryCommand(input, ...args));
};
const makePagedRequest = async (
  client: SSM,
  input: GetParameterHistoryCommandInput,
  ...args: any
): Promise<GetParameterHistoryCommandOutput> => {
  // @ts-ignore
  return await client.getParameterHistory(input, ...args);
};
export async function* getParameterHistoryPaginate(
  config: SSMPaginationConfiguration,
  input: GetParameterHistoryCommandInput,
  ...additionalArguments: any
): Paginator<GetParameterHistoryCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: GetParameterHistoryCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SSM) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SSMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SSM | SSMClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
