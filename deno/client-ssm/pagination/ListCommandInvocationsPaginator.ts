
import { SSM } from "../SSM.ts";
import { SSMClient } from "../SSMClient.ts";
import {
  ListCommandInvocationsCommand,
  ListCommandInvocationsCommandInput,
  ListCommandInvocationsCommandOutput,
} from "../commands/ListCommandInvocationsCommand.ts";
import { SSMPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: SSMClient,
  input: ListCommandInvocationsCommandInput,
  ...args: any
): Promise<ListCommandInvocationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListCommandInvocationsCommand(input), ...args);
};
const makePagedRequest = async (
  client: SSM,
  input: ListCommandInvocationsCommandInput,
  ...args: any
): Promise<ListCommandInvocationsCommandOutput> => {
  // @ts-ignore
  return await client.listCommandInvocations(input, ...args);
};
export async function* paginateListCommandInvocations(
  config: SSMPaginationConfiguration,
  input: ListCommandInvocationsCommandInput,
  ...additionalArguments: any
): Paginator<ListCommandInvocationsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListCommandInvocationsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SSM) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SSMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SSM | SSMClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
