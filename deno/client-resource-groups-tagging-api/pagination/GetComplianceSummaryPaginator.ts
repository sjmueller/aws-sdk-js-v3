
import { ResourceGroupsTaggingAPI } from "../ResourceGroupsTaggingAPI.ts";
import { ResourceGroupsTaggingAPIClient } from "../ResourceGroupsTaggingAPIClient.ts";
import {
  GetComplianceSummaryCommand,
  GetComplianceSummaryCommandInput,
  GetComplianceSummaryCommandOutput,
} from "../commands/GetComplianceSummaryCommand.ts";
import { ResourceGroupsTaggingAPIPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: ResourceGroupsTaggingAPIClient,
  input: GetComplianceSummaryCommandInput,
  ...args: any
): Promise<GetComplianceSummaryCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetComplianceSummaryCommand(input), ...args);
};
const makePagedRequest = async (
  client: ResourceGroupsTaggingAPI,
  input: GetComplianceSummaryCommandInput,
  ...args: any
): Promise<GetComplianceSummaryCommandOutput> => {
  // @ts-ignore
  return await client.getComplianceSummary(input, ...args);
};
export async function* paginateGetComplianceSummary(
  config: ResourceGroupsTaggingAPIPaginationConfiguration,
  input: GetComplianceSummaryCommandInput,
  ...additionalArguments: any
): Paginator<GetComplianceSummaryCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetComplianceSummaryCommandOutput;
  while (hasNext) {
    input.PaginationToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ResourceGroupsTaggingAPI) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ResourceGroupsTaggingAPIClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ResourceGroupsTaggingAPI | ResourceGroupsTaggingAPIClient");
    }
    yield page;
    token = page.PaginationToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
