import { FraudDetector } from "../FraudDetector.ts";
import { FraudDetectorClient } from "../FraudDetectorClient.ts";
import {
  GetDetectorsCommand,
  GetDetectorsCommandInput,
  GetDetectorsCommandOutput,
} from "../commands/GetDetectorsCommand.ts";
import { FraudDetectorPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: FraudDetectorClient,
  input: GetDetectorsCommandInput,
  ...args: any
): Promise<GetDetectorsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetDetectorsCommand(input, ...args));
};
const makePagedRequest = async (
  client: FraudDetector,
  input: GetDetectorsCommandInput,
  ...args: any
): Promise<GetDetectorsCommandOutput> => {
  // @ts-ignore
  return await client.getDetectors(input, ...args);
};
export async function* getDetectorsPaginate(
  config: FraudDetectorPaginationConfiguration,
  input: GetDetectorsCommandInput,
  ...additionalArguments: any
): Paginator<GetDetectorsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: GetDetectorsCommandOutput;
  while (hasNext) {
    input["nextToken"] = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof FraudDetector) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof FraudDetectorClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected FraudDetector | FraudDetectorClient");
    }
    yield page;
    token = page["nextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
