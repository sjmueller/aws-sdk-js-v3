import { Chime } from "../Chime.ts";
import { ChimeClient } from "../ChimeClient.ts";
import {
  ListVoiceConnectorsCommand,
  ListVoiceConnectorsCommandInput,
  ListVoiceConnectorsCommandOutput,
} from "../commands/ListVoiceConnectorsCommand.ts";
import { ChimePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: ChimeClient,
  input: ListVoiceConnectorsCommandInput,
  ...args: any
): Promise<ListVoiceConnectorsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListVoiceConnectorsCommand(input, ...args));
};
const makePagedRequest = async (
  client: Chime,
  input: ListVoiceConnectorsCommandInput,
  ...args: any
): Promise<ListVoiceConnectorsCommandOutput> => {
  // @ts-ignore
  return await client.listVoiceConnectors(input, ...args);
};
export async function* listVoiceConnectorsPaginate(
  config: ChimePaginationConfiguration,
  input: ListVoiceConnectorsCommandInput,
  ...additionalArguments: any
): Paginator<ListVoiceConnectorsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListVoiceConnectorsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Chime) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ChimeClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Chime | ChimeClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
