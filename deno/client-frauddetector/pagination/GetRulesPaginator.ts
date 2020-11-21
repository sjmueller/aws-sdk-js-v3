
import { FraudDetector } from "../FraudDetector.ts";
import { FraudDetectorClient } from "../FraudDetectorClient.ts";
import { GetRulesCommand, GetRulesCommandInput, GetRulesCommandOutput } from "../commands/GetRulesCommand.ts";
import { FraudDetectorPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: FraudDetectorClient,
  input: GetRulesCommandInput,
  ...args: any
): Promise<GetRulesCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetRulesCommand(input), ...args);
};
const makePagedRequest = async (
  client: FraudDetector,
  input: GetRulesCommandInput,
  ...args: any
): Promise<GetRulesCommandOutput> => {
  // @ts-ignore
  return await client.getRules(input, ...args);
};
export async function* paginateGetRules(
  config: FraudDetectorPaginationConfiguration,
  input: GetRulesCommandInput,
  ...additionalArguments: any
): Paginator<GetRulesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetRulesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof FraudDetector) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof FraudDetectorClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected FraudDetector | FraudDetectorClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
