import { S3 } from "../S3.ts";
import { S3Client } from "../S3Client.ts";
import {
  ListObjectsV2Command,
  ListObjectsV2CommandInput,
  ListObjectsV2CommandOutput,
} from "../commands/ListObjectsV2Command.ts";
import { S3PaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: S3Client,
  input: ListObjectsV2CommandInput,
  ...args: any
): Promise<ListObjectsV2CommandOutput> => {
  // @ts-ignore
  return await client.send(new ListObjectsV2Command(input, ...args));
};
const makePagedRequest = async (
  client: S3,
  input: ListObjectsV2CommandInput,
  ...args: any
): Promise<ListObjectsV2CommandOutput> => {
  // @ts-ignore
  return await client.listObjectsV2(input, ...args);
};
export async function* listObjectsV2Paginate(
  config: S3PaginationConfiguration,
  input: ListObjectsV2CommandInput,
  ...additionalArguments: any
): Paginator<ListObjectsV2CommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListObjectsV2CommandOutput;
  while (hasNext) {
    input["ContinuationToken"] = token;
    input["MaxKeys"] = config.pageSize;
    if (config.client instanceof S3) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof S3Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected S3 | S3Client");
    }
    yield page;
    token = page["NextContinuationToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
