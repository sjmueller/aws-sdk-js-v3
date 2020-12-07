import { Redshift } from "../Redshift.ts";
import { RedshiftClient } from "../RedshiftClient.ts";
import {
  DescribeTableRestoreStatusCommand,
  DescribeTableRestoreStatusCommandInput,
  DescribeTableRestoreStatusCommandOutput,
} from "../commands/DescribeTableRestoreStatusCommand.ts";
import { RedshiftPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: RedshiftClient,
  input: DescribeTableRestoreStatusCommandInput,
  ...args: any
): Promise<DescribeTableRestoreStatusCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeTableRestoreStatusCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Redshift,
  input: DescribeTableRestoreStatusCommandInput,
  ...args: any
): Promise<DescribeTableRestoreStatusCommandOutput> => {
  // @ts-ignore
  return await client.describeTableRestoreStatus(input, ...args);
};
export async function* paginateDescribeTableRestoreStatus(
  config: RedshiftPaginationConfiguration,
  input: DescribeTableRestoreStatusCommandInput,
  ...additionalArguments: any
): Paginator<DescribeTableRestoreStatusCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeTableRestoreStatusCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof Redshift) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof RedshiftClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Redshift | RedshiftClient");
    }
    yield page;
    token = page.Marker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
