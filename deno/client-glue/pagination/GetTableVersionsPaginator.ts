import { Glue } from "../Glue.ts";
import { GlueClient } from "../GlueClient.ts";
import {
  GetTableVersionsCommand,
  GetTableVersionsCommandInput,
  GetTableVersionsCommandOutput,
} from "../commands/GetTableVersionsCommand.ts";
import { GluePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: GlueClient,
  input: GetTableVersionsCommandInput,
  ...args: any
): Promise<GetTableVersionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetTableVersionsCommand(input, ...args));
};
const makePagedRequest = async (
  client: Glue,
  input: GetTableVersionsCommandInput,
  ...args: any
): Promise<GetTableVersionsCommandOutput> => {
  // @ts-ignore
  return await client.getTableVersions(input, ...args);
};
export async function* getTableVersionsPaginate(
  config: GluePaginationConfiguration,
  input: GetTableVersionsCommandInput,
  ...additionalArguments: any
): Paginator<GetTableVersionsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: GetTableVersionsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Glue) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof GlueClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Glue | GlueClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
