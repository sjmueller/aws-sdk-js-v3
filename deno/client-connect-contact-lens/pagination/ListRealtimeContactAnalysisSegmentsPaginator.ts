import { ConnectContactLens } from "../ConnectContactLens.ts";
import { ConnectContactLensClient } from "../ConnectContactLensClient.ts";
import {
  ListRealtimeContactAnalysisSegmentsCommand,
  ListRealtimeContactAnalysisSegmentsCommandInput,
  ListRealtimeContactAnalysisSegmentsCommandOutput,
} from "../commands/ListRealtimeContactAnalysisSegmentsCommand.ts";
import { ConnectContactLensPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ConnectContactLensClient,
  input: ListRealtimeContactAnalysisSegmentsCommandInput,
  ...args: any
): Promise<ListRealtimeContactAnalysisSegmentsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRealtimeContactAnalysisSegmentsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ConnectContactLens,
  input: ListRealtimeContactAnalysisSegmentsCommandInput,
  ...args: any
): Promise<ListRealtimeContactAnalysisSegmentsCommandOutput> => {
  // @ts-ignore
  return await client.listRealtimeContactAnalysisSegments(input, ...args);
};
export async function* paginateListRealtimeContactAnalysisSegments(
  config: ConnectContactLensPaginationConfiguration,
  input: ListRealtimeContactAnalysisSegmentsCommandInput,
  ...additionalArguments: any
): Paginator<ListRealtimeContactAnalysisSegmentsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListRealtimeContactAnalysisSegmentsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ConnectContactLens) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ConnectContactLensClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ConnectContactLens | ConnectContactLensClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
