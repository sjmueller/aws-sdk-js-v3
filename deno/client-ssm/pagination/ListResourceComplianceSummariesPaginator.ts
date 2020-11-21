
import { SSM } from "../SSM.ts";
import { SSMClient } from "../SSMClient.ts";
import {
  ListResourceComplianceSummariesCommand,
  ListResourceComplianceSummariesCommandInput,
  ListResourceComplianceSummariesCommandOutput,
} from "../commands/ListResourceComplianceSummariesCommand.ts";
import { SSMPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: SSMClient,
  input: ListResourceComplianceSummariesCommandInput,
  ...args: any
): Promise<ListResourceComplianceSummariesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListResourceComplianceSummariesCommand(input), ...args);
};
const makePagedRequest = async (
  client: SSM,
  input: ListResourceComplianceSummariesCommandInput,
  ...args: any
): Promise<ListResourceComplianceSummariesCommandOutput> => {
  // @ts-ignore
  return await client.listResourceComplianceSummaries(input, ...args);
};
export async function* paginateListResourceComplianceSummaries(
  config: SSMPaginationConfiguration,
  input: ListResourceComplianceSummariesCommandInput,
  ...additionalArguments: any
): Paginator<ListResourceComplianceSummariesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListResourceComplianceSummariesCommandOutput;
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
