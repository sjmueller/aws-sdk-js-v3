
import { XRay } from "../XRay.ts";
import { XRayClient } from "../XRayClient.ts";
import {
  BatchGetTracesCommand,
  BatchGetTracesCommandInput,
  BatchGetTracesCommandOutput,
} from "../commands/BatchGetTracesCommand.ts";
import { XRayPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: XRayClient,
  input: BatchGetTracesCommandInput,
  ...args: any
): Promise<BatchGetTracesCommandOutput> => {
  // @ts-ignore
  return await client.send(new BatchGetTracesCommand(input, ...args));
};
const makePagedRequest = async (
  client: XRay,
  input: BatchGetTracesCommandInput,
  ...args: any
): Promise<BatchGetTracesCommandOutput> => {
  // @ts-ignore
  return await client.batchGetTraces(input, ...args);
};
export async function* batchGetTracesPaginate(
  config: XRayPaginationConfiguration,
  input: BatchGetTracesCommandInput,
  ...additionalArguments: any
): Paginator<BatchGetTracesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: BatchGetTracesCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    if (config.client instanceof XRay) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof XRayClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected XRay | XRayClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
