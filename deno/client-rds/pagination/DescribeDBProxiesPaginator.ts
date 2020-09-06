
import { RDS } from "../RDS.ts";
import { RDSClient } from "../RDSClient.ts";
import {
  DescribeDBProxiesCommand,
  DescribeDBProxiesCommandInput,
  DescribeDBProxiesCommandOutput,
} from "../commands/DescribeDBProxiesCommand.ts";
import { RDSPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: RDSClient,
  input: DescribeDBProxiesCommandInput,
  ...args: any
): Promise<DescribeDBProxiesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeDBProxiesCommand(input, ...args));
};
const makePagedRequest = async (
  client: RDS,
  input: DescribeDBProxiesCommandInput,
  ...args: any
): Promise<DescribeDBProxiesCommandOutput> => {
  // @ts-ignore
  return await client.describeDBProxies(input, ...args);
};
export async function* describeDBProxiesPaginate(
  config: RDSPaginationConfiguration,
  input: DescribeDBProxiesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeDBProxiesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeDBProxiesCommandOutput;
  while (hasNext) {
    input["Marker"] = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof RDS) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof RDSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected RDS | RDSClient");
    }
    yield page;
    token = page["Marker"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
