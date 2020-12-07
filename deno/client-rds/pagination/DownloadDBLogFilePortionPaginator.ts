import { RDS } from "../RDS.ts";
import { RDSClient } from "../RDSClient.ts";
import {
  DownloadDBLogFilePortionCommand,
  DownloadDBLogFilePortionCommandInput,
  DownloadDBLogFilePortionCommandOutput,
} from "../commands/DownloadDBLogFilePortionCommand.ts";
import { RDSPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: RDSClient,
  input: DownloadDBLogFilePortionCommandInput,
  ...args: any
): Promise<DownloadDBLogFilePortionCommandOutput> => {
  // @ts-ignore
  return await client.send(new DownloadDBLogFilePortionCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: RDS,
  input: DownloadDBLogFilePortionCommandInput,
  ...args: any
): Promise<DownloadDBLogFilePortionCommandOutput> => {
  // @ts-ignore
  return await client.downloadDBLogFilePortion(input, ...args);
};
export async function* paginateDownloadDBLogFilePortion(
  config: RDSPaginationConfiguration,
  input: DownloadDBLogFilePortionCommandInput,
  ...additionalArguments: any
): Paginator<DownloadDBLogFilePortionCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DownloadDBLogFilePortionCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["NumberOfLines"] = config.pageSize;
    if (config.client instanceof RDS) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof RDSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected RDS | RDSClient");
    }
    yield page;
    token = page.Marker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
