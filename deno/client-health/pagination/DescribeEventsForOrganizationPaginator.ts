import { Health } from "../Health.ts";
import { HealthClient } from "../HealthClient.ts";
import {
  DescribeEventsForOrganizationCommand,
  DescribeEventsForOrganizationCommandInput,
  DescribeEventsForOrganizationCommandOutput,
} from "../commands/DescribeEventsForOrganizationCommand.ts";
import { HealthPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: HealthClient,
  input: DescribeEventsForOrganizationCommandInput,
  ...args: any
): Promise<DescribeEventsForOrganizationCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeEventsForOrganizationCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Health,
  input: DescribeEventsForOrganizationCommandInput,
  ...args: any
): Promise<DescribeEventsForOrganizationCommandOutput> => {
  // @ts-ignore
  return await client.describeEventsForOrganization(input, ...args);
};
export async function* paginateDescribeEventsForOrganization(
  config: HealthPaginationConfiguration,
  input: DescribeEventsForOrganizationCommandInput,
  ...additionalArguments: any
): Paginator<DescribeEventsForOrganizationCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeEventsForOrganizationCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Health) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof HealthClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Health | HealthClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
