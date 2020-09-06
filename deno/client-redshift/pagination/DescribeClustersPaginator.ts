
import { Redshift } from "../Redshift.ts";
import { RedshiftClient } from "../RedshiftClient.ts";
import {
  DescribeClustersCommand,
  DescribeClustersCommandInput,
  DescribeClustersCommandOutput,
} from "../commands/DescribeClustersCommand.ts";
import { RedshiftPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: RedshiftClient,
  input: DescribeClustersCommandInput,
  ...args: any
): Promise<DescribeClustersCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeClustersCommand(input, ...args));
};
const makePagedRequest = async (
  client: Redshift,
  input: DescribeClustersCommandInput,
  ...args: any
): Promise<DescribeClustersCommandOutput> => {
  // @ts-ignore
  return await client.describeClusters(input, ...args);
};
export async function* describeClustersPaginate(
  config: RedshiftPaginationConfiguration,
  input: DescribeClustersCommandInput,
  ...additionalArguments: any
): Paginator<DescribeClustersCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeClustersCommandOutput;
  while (hasNext) {
    input["Marker"] = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof Redshift) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof RedshiftClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Redshift | RedshiftClient");
    }
    yield page;
    token = page["Marker"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
