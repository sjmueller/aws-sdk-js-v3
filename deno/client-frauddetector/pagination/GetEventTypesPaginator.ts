
import { FraudDetector } from "../FraudDetector.ts";
import { FraudDetectorClient } from "../FraudDetectorClient.ts";
import {
  GetEventTypesCommand,
  GetEventTypesCommandInput,
  GetEventTypesCommandOutput,
} from "../commands/GetEventTypesCommand.ts";
import { FraudDetectorPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: FraudDetectorClient,
  input: GetEventTypesCommandInput,
  ...args: any
): Promise<GetEventTypesCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetEventTypesCommand(input), ...args);
};
const makePagedRequest = async (
  client: FraudDetector,
  input: GetEventTypesCommandInput,
  ...args: any
): Promise<GetEventTypesCommandOutput> => {
  // @ts-ignore
  return await client.getEventTypes(input, ...args);
};
export async function* paginateGetEventTypes(
  config: FraudDetectorPaginationConfiguration,
  input: GetEventTypesCommandInput,
  ...additionalArguments: any
): Paginator<GetEventTypesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetEventTypesCommandOutput;
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
