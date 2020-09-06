import { Buffer } from "../../buffer/mod.ts";
import { ProviderError } from "../../property-provider/mod.ts";
import { Buffer } from "buffer.ts";
import { IncomingMessage, request, RequestOptions } from "http.ts";

/**
 * @internal
 */
export function httpRequest(options: RequestOptions): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const req = request({ method: "GET", ...options });

    req.on("error", (err) => {
      reject(Object.assign(new ProviderError("Unable to connect to instance metadata service"), err));
    });

    req.on("timeout", () => {
      reject(new Error("TimeoutError"));
    });

    req.on("response", (res: IncomingMessage) => {
      const { statusCode = 400 } = res;
      if (statusCode < 200 || 300 <= statusCode) {
        reject(
          Object.assign(new ProviderError("Error response received from instance metadata service"), { statusCode })
        );
      }

      const chunks: Array<Buffer> = [];
      res.on("data", (chunk) => {
        chunks.push(chunk as Buffer);
      });
      res.on("end", () => {
        resolve(Buffer.concat(chunks));
      });
    });

    req.end();
  });
}
