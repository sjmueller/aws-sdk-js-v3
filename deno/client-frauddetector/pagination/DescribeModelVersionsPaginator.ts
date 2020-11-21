
import { FraudDetector } from "../FraudDetector.ts";
import { FraudDetectorClient } from "../FraudDetectorClient.ts";
import {
  DescribeModelVersionsCommand,
  DescribeModelVersionsCommandInput,
  DescribeModelVersionsCommandOutput,
} from "../commands/DescribeModelVersionsCommand.ts";
import { FraudDetectorPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: FraudDetectorClient,
  input: DescribeModelVersionsCommandInput,
  ...args: any
): Promise<DescribeModelVersionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeModelVersionsCommand(input), ...args);
};
const makePagedRequest = async (
  client: FraudDetector,
  input: DescribeModelVersionsCommandInput,
  ...args: any
): Promise<DescribeModelVersionsCommandOutput> => {
  // @ts-ignore
  return await client.describeModelVersions(input, ...args);
};
export async function* paginateDescribeModelVersions(
  config: FraudDetectorPaginationConfiguration,
  input: DescribeModelVersionsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeModelVersionsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeModelVersionsCommandOutput;
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
