import { blobReader } from "../chunked-blob-reader/mod.ts";
import { TreeHash } from "../sha256-tree-hash/mod.ts";
import { Decoder, HashConstructor, HttpRequest } from "../types/mod.ts";
import { toHex } from "../util-hex-encoding/mod.ts";

const MiB = 1024 * 1024;

export async function bodyChecksumGenerator(
  request: HttpRequest,
  options: {
    sha256: HashConstructor;
    utf8Decoder: Decoder;
  }
): Promise<[string, string]> {
  const contentHash = new options.sha256();
  const treeHash = new TreeHash(options.sha256, options.utf8Decoder);
  const { body } = request;
  if (typeof body === "string") {
    contentHash.update(body);
    treeHash.update(body);
  } else {
    if (Boolean(body) && Object.prototype.toString.call(body) === "[object Blob]") {
      await blobReader(
        body,
        (chunk: any) => {
          treeHash?.update(chunk);
          contentHash?.update(chunk);
        },
        MiB
      );
    } else {
      throw new Error("Unable to calculate checksums for non-blob streams.");
    }
  }

  return [toHex(await contentHash.digest()), toHex(await treeHash.digest())];
}
