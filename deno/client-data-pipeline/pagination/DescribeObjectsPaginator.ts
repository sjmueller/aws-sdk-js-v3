import { DataPipeline } from "../DataPipeline.ts";
import { DataPipelineClient } from "../DataPipelineClient.ts";
import {
  DescribeObjectsCommand,
  DescribeObjectsCommandInput,
  DescribeObjectsCommandOutput,
} from "../commands/DescribeObjectsCommand.ts";
import { DataPipelinePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: DataPipelineClient,
  input: DescribeObjectsCommandInput,
  ...args: any
): Promise<DescribeObjectsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeObjectsCommand(input, ...args));
};
const makePagedRequest = async (
  client: DataPipeline,
  input: DescribeObjectsCommandInput,
  ...args: any
): Promise<DescribeObjectsCommandOutput> => {
  // @ts-ignore
  return await client.describeObjects(input, ...args);
};
export async function* describeObjectsPaginate(
  config: DataPipelinePaginationConfiguration,
  input: DescribeObjectsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeObjectsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeObjectsCommandOutput;
  while (hasNext) {
    input["marker"] = token;
    if (config.client instanceof DataPipeline) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof DataPipelineClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DataPipeline | DataPipelineClient");
    }
    yield page;
    token = page["marker"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
