import { ClientSharedValues } from "./runtimeConfig.shared.ts";
import { lstatSync } from "https://deno.land/std@0.93.0/node/fs.ts";

/**
 * @internal
 */
export const ClientDefaultValues = {
  ...ClientSharedValues,
  runtime: "deno",
  lstatSync,
};
