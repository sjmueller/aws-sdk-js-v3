
import { SWF } from "../SWF.ts";
import { SWFClient } from "../SWFClient.ts";
import {
  ListClosedWorkflowExecutionsCommand,
  ListClosedWorkflowExecutionsCommandInput,
  ListClosedWorkflowExecutionsCommandOutput,
} from "../commands/ListClosedWorkflowExecutionsCommand.ts";
import { SWFPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: SWFClient,
  input: ListClosedWorkflowExecutionsCommandInput,
  ...args: any
): Promise<ListClosedWorkflowExecutionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListClosedWorkflowExecutionsCommand(input), ...args);
};
const makePagedRequest = async (
  client: SWF,
  input: ListClosedWorkflowExecutionsCommandInput,
  ...args: any
): Promise<ListClosedWorkflowExecutionsCommandOutput> => {
  // @ts-ignore
  return await client.listClosedWorkflowExecutions(input, ...args);
};
export async function* paginateListClosedWorkflowExecutions(
  config: SWFPaginationConfiguration,
  input: ListClosedWorkflowExecutionsCommandInput,
  ...additionalArguments: any
): Paginator<ListClosedWorkflowExecutionsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListClosedWorkflowExecutionsCommandOutput;
  while (hasNext) {
    input.nextPageToken = token;
    input["maximumPageSize"] = config.pageSize;
    if (config.client instanceof SWF) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SWFClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SWF | SWFClient");
    }
    yield page;
    token = page.nextPageToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
