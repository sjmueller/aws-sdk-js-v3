import { Buffer } from "https://deno.land/std@0.79.0/node/buffer.ts"
import { ProviderError } from "../../property-provider/mod.ts";
type RequestOptions = any

/**
 * @internal
 */
export async function httpRequest(options: RequestOptions): Promise<Buffer> {
  try {
    const response = await fetch({ method: "GET", ...options });

    const { status: statusCode = 400 } = response;
    if (statusCode < 200 || 300 <= statusCode) {
      throw Object.assign(new ProviderError("Error response received from instance metadata service"), { statusCode })
    }

    return Buffer.from(await response.text())
  } catch (err) {
      throw Object.assign(new ProviderError("Unable to connect to instance metadata service"), err)
  }
}
