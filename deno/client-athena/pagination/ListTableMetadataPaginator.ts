import { Athena } from "../Athena.ts";
import { AthenaClient } from "../AthenaClient.ts";
import {
  ListTableMetadataCommand,
  ListTableMetadataCommandInput,
  ListTableMetadataCommandOutput,
} from "../commands/ListTableMetadataCommand.ts";
import { AthenaPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: AthenaClient,
  input: ListTableMetadataCommandInput,
  ...args: any
): Promise<ListTableMetadataCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTableMetadataCommand(input), ...args);
};
const makePagedRequest = async (
  client: Athena,
  input: ListTableMetadataCommandInput,
  ...args: any
): Promise<ListTableMetadataCommandOutput> => {
  // @ts-ignore
  return await client.listTableMetadata(input, ...args);
};
export async function* paginateListTableMetadata(
  config: AthenaPaginationConfiguration,
  input: ListTableMetadataCommandInput,
  ...additionalArguments: any
): Paginator<ListTableMetadataCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListTableMetadataCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Athena) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof AthenaClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Athena | AthenaClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
