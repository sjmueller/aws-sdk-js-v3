import { ClientSharedValues } from "./runtimeConfig.shared.ts";

/**
 * @internal
 */
export const ClientDefaultValues = {
  ...ClientSharedValues,
  runtime: "deno",
};
