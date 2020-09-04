import { RDS } from "../RDS.ts";
import { RDSClient } from "../RDSClient.ts";
import {
  DescribeSourceRegionsCommand,
  DescribeSourceRegionsCommandInput,
  DescribeSourceRegionsCommandOutput,
} from "../commands/DescribeSourceRegionsCommand.ts";
import { RDSPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: RDSClient,
  input: DescribeSourceRegionsCommandInput,
  ...args: any
): Promise<DescribeSourceRegionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeSourceRegionsCommand(input, ...args));
};
const makePagedRequest = async (
  client: RDS,
  input: DescribeSourceRegionsCommandInput,
  ...args: any
): Promise<DescribeSourceRegionsCommandOutput> => {
  // @ts-ignore
  return await client.describeSourceRegions(input, ...args);
};
export async function* describeSourceRegionsPaginate(
  config: RDSPaginationConfiguration,
  input: DescribeSourceRegionsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeSourceRegionsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeSourceRegionsCommandOutput;
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
