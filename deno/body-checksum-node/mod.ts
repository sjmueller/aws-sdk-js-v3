
import { streamReader } from "../chunked-stream-reader-node/mod.ts";
import { isArrayBuffer } from "../is-array-buffer/mod.ts";
import { TreeHash } from "../sha256-tree-hash/mod.ts";
import { Decoder, HashConstructor, HttpRequest } from "../types/mod.ts";
import { toHex } from "../util-hex-encoding/mod.ts";
import { createReadStream } from "https://deno.land/std@0.79.0/node/fs.ts";

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
  if (typeof body === "string" || ArrayBuffer.isView(body) || isArrayBuffer(body)) {
    contentHash?.update(body);
    treeHash?.update(body);
  } else {
    if (typeof body.path !== "string") {
      throw new Error("Unable to calculate checksums for non-file streams.");
    }
    const bodyTee = createReadStream(body.path, {
      start: (body as any).start,
      end: (body as any).end,
    });

    await streamReader(bodyTee, (chunk: any) => {
      contentHash?.update(chunk);
      treeHash?.update(chunk);
    });
  }

  return [toHex(await contentHash.digest()), toHex(await treeHash.digest())];
}
