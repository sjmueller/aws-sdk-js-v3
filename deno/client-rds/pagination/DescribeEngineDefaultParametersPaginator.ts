
import { RDS } from "../RDS.ts";
import { RDSClient } from "../RDSClient.ts";
import {
  DescribeEngineDefaultParametersCommand,
  DescribeEngineDefaultParametersCommandInput,
  DescribeEngineDefaultParametersCommandOutput,
} from "../commands/DescribeEngineDefaultParametersCommand.ts";
import { RDSPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: RDSClient,
  input: DescribeEngineDefaultParametersCommandInput,
  ...args: any
): Promise<DescribeEngineDefaultParametersCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeEngineDefaultParametersCommand(input), ...args);
};
const makePagedRequest = async (
  client: RDS,
  input: DescribeEngineDefaultParametersCommandInput,
  ...args: any
): Promise<DescribeEngineDefaultParametersCommandOutput> => {
  // @ts-ignore
  return await client.describeEngineDefaultParameters(input, ...args);
};
export async function* paginateDescribeEngineDefaultParameters(
  config: RDSPaginationConfiguration,
  input: DescribeEngineDefaultParametersCommandInput,
  ...additionalArguments: any
): Paginator<DescribeEngineDefaultParametersCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeEngineDefaultParametersCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof RDS) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof RDSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected RDS | RDSClient");
    }
    yield page;
    token = page.EngineDefaults!.Marker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
