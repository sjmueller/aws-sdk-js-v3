
import { XRay } from "../XRay.ts";
import { XRayClient } from "../XRayClient.ts";
import {
  GetTraceSummariesCommand,
  GetTraceSummariesCommandInput,
  GetTraceSummariesCommandOutput,
} from "../commands/GetTraceSummariesCommand.ts";
import { XRayPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: XRayClient,
  input: GetTraceSummariesCommandInput,
  ...args: any
): Promise<GetTraceSummariesCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetTraceSummariesCommand(input, ...args));
};
const makePagedRequest = async (
  client: XRay,
  input: GetTraceSummariesCommandInput,
  ...args: any
): Promise<GetTraceSummariesCommandOutput> => {
  // @ts-ignore
  return await client.getTraceSummaries(input, ...args);
};
export async function* getTraceSummariesPaginate(
  config: XRayPaginationConfiguration,
  input: GetTraceSummariesCommandInput,
  ...additionalArguments: any
): Paginator<GetTraceSummariesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: GetTraceSummariesCommandOutput;
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
