import { Buffer } from "https://deno.land/std@0.89.0/node/buffer.ts";
import { Readable } from "https://deno.land/std@0.89.0/node/stream.ts";

export async function* getDataReadable(data: Readable): AsyncGenerator<Buffer> {
  for await (const chunk of data) {
    // $ts-ignore
    yield Buffer.from(chunk);
  }
}
