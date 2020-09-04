import { RDS } from "../RDS.ts";
import { RDSClient } from "../RDSClient.ts";
import {
  DescribeCustomAvailabilityZonesCommand,
  DescribeCustomAvailabilityZonesCommandInput,
  DescribeCustomAvailabilityZonesCommandOutput,
} from "../commands/DescribeCustomAvailabilityZonesCommand.ts";
import { RDSPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: RDSClient,
  input: DescribeCustomAvailabilityZonesCommandInput,
  ...args: any
): Promise<DescribeCustomAvailabilityZonesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeCustomAvailabilityZonesCommand(input, ...args));
};
const makePagedRequest = async (
  client: RDS,
  input: DescribeCustomAvailabilityZonesCommandInput,
  ...args: any
): Promise<DescribeCustomAvailabilityZonesCommandOutput> => {
  // @ts-ignore
  return await client.describeCustomAvailabilityZones(input, ...args);
};
export async function* describeCustomAvailabilityZonesPaginate(
  config: RDSPaginationConfiguration,
  input: DescribeCustomAvailabilityZonesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeCustomAvailabilityZonesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeCustomAvailabilityZonesCommandOutput;
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
