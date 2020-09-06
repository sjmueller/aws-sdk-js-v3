
import { Neptune } from "../Neptune.ts";
import { NeptuneClient } from "../NeptuneClient.ts";
import {
  DescribeDBParametersCommand,
  DescribeDBParametersCommandInput,
  DescribeDBParametersCommandOutput,
} from "../commands/DescribeDBParametersCommand.ts";
import { NeptunePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: NeptuneClient,
  input: DescribeDBParametersCommandInput,
  ...args: any
): Promise<DescribeDBParametersCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeDBParametersCommand(input, ...args));
};
const makePagedRequest = async (
  client: Neptune,
  input: DescribeDBParametersCommandInput,
  ...args: any
): Promise<DescribeDBParametersCommandOutput> => {
  // @ts-ignore
  return await client.describeDBParameters(input, ...args);
};
export async function* describeDBParametersPaginate(
  config: NeptunePaginationConfiguration,
  input: DescribeDBParametersCommandInput,
  ...additionalArguments: any
): Paginator<DescribeDBParametersCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeDBParametersCommandOutput;
  while (hasNext) {
    input["Marker"] = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof Neptune) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof NeptuneClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Neptune | NeptuneClient");
    }
    yield page;
    token = page["Marker"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
