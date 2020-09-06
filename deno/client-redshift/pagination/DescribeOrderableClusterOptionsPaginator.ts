
import { Redshift } from "../Redshift.ts";
import { RedshiftClient } from "../RedshiftClient.ts";
import {
  DescribeOrderableClusterOptionsCommand,
  DescribeOrderableClusterOptionsCommandInput,
  DescribeOrderableClusterOptionsCommandOutput,
} from "../commands/DescribeOrderableClusterOptionsCommand.ts";
import { RedshiftPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: RedshiftClient,
  input: DescribeOrderableClusterOptionsCommandInput,
  ...args: any
): Promise<DescribeOrderableClusterOptionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeOrderableClusterOptionsCommand(input, ...args));
};
const makePagedRequest = async (
  client: Redshift,
  input: DescribeOrderableClusterOptionsCommandInput,
  ...args: any
): Promise<DescribeOrderableClusterOptionsCommandOutput> => {
  // @ts-ignore
  return await client.describeOrderableClusterOptions(input, ...args);
};
export async function* describeOrderableClusterOptionsPaginate(
  config: RedshiftPaginationConfiguration,
  input: DescribeOrderableClusterOptionsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeOrderableClusterOptionsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeOrderableClusterOptionsCommandOutput;
  while (hasNext) {
    input["Marker"] = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof Redshift) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof RedshiftClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Redshift | RedshiftClient");
    }
    yield page;
    token = page["Marker"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
