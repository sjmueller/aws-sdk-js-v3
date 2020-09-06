
import { ElasticsearchService } from "../ElasticsearchService.ts";
import { ElasticsearchServiceClient } from "../ElasticsearchServiceClient.ts";
import {
  DescribeReservedElasticsearchInstanceOfferingsCommand,
  DescribeReservedElasticsearchInstanceOfferingsCommandInput,
  DescribeReservedElasticsearchInstanceOfferingsCommandOutput,
} from "../commands/DescribeReservedElasticsearchInstanceOfferingsCommand.ts";
import { ElasticsearchServicePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: ElasticsearchServiceClient,
  input: DescribeReservedElasticsearchInstanceOfferingsCommandInput,
  ...args: any
): Promise<DescribeReservedElasticsearchInstanceOfferingsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeReservedElasticsearchInstanceOfferingsCommand(input, ...args));
};
const makePagedRequest = async (
  client: ElasticsearchService,
  input: DescribeReservedElasticsearchInstanceOfferingsCommandInput,
  ...args: any
): Promise<DescribeReservedElasticsearchInstanceOfferingsCommandOutput> => {
  // @ts-ignore
  return await client.describeReservedElasticsearchInstanceOfferings(input, ...args);
};
export async function* describeReservedElasticsearchInstanceOfferingsPaginate(
  config: ElasticsearchServicePaginationConfiguration,
  input: DescribeReservedElasticsearchInstanceOfferingsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeReservedElasticsearchInstanceOfferingsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeReservedElasticsearchInstanceOfferingsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ElasticsearchService) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ElasticsearchServiceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ElasticsearchService | ElasticsearchServiceClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
