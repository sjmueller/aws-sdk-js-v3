import { ConfigService } from "../ConfigService.ts";
import { ConfigServiceClient } from "../ConfigServiceClient.ts";
import {
  DescribeConformancePackComplianceCommand,
  DescribeConformancePackComplianceCommandInput,
  DescribeConformancePackComplianceCommandOutput,
} from "../commands/DescribeConformancePackComplianceCommand.ts";
import { ConfigServicePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ConfigServiceClient,
  input: DescribeConformancePackComplianceCommandInput,
  ...args: any
): Promise<DescribeConformancePackComplianceCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeConformancePackComplianceCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ConfigService,
  input: DescribeConformancePackComplianceCommandInput,
  ...args: any
): Promise<DescribeConformancePackComplianceCommandOutput> => {
  // @ts-ignore
  return await client.describeConformancePackCompliance(input, ...args);
};
export async function* paginateDescribeConformancePackCompliance(
  config: ConfigServicePaginationConfiguration,
  input: DescribeConformancePackComplianceCommandInput,
  ...additionalArguments: any
): Paginator<DescribeConformancePackComplianceCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeConformancePackComplianceCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["Limit"] = config.pageSize;
    if (config.client instanceof ConfigService) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ConfigServiceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ConfigService | ConfigServiceClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
