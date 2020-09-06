
import { ApplicationInsights } from "../ApplicationInsights.ts";
import { ApplicationInsightsClient } from "../ApplicationInsightsClient.ts";
import {
  ListLogPatternSetsCommand,
  ListLogPatternSetsCommandInput,
  ListLogPatternSetsCommandOutput,
} from "../commands/ListLogPatternSetsCommand.ts";
import { ApplicationInsightsPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: ApplicationInsightsClient,
  input: ListLogPatternSetsCommandInput,
  ...args: any
): Promise<ListLogPatternSetsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListLogPatternSetsCommand(input, ...args));
};
const makePagedRequest = async (
  client: ApplicationInsights,
  input: ListLogPatternSetsCommandInput,
  ...args: any
): Promise<ListLogPatternSetsCommandOutput> => {
  // @ts-ignore
  return await client.listLogPatternSets(input, ...args);
};
export async function* listLogPatternSetsPaginate(
  config: ApplicationInsightsPaginationConfiguration,
  input: ListLogPatternSetsCommandInput,
  ...additionalArguments: any
): Paginator<ListLogPatternSetsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListLogPatternSetsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ApplicationInsights) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ApplicationInsightsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ApplicationInsights | ApplicationInsightsClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
