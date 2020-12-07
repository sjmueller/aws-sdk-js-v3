import { Pluggable } from "../../types/mod.ts";

import { S3ControlResolvedConfig } from "../configurations.ts";
import { parseOutpostArnablesMiddleaware, parseOutpostArnablesMiddleawareOptions } from "./parse-outpost-arnables.ts";
import { updateArnablesRequestMiddleware, updateArnablesRequestMiddlewareOptions } from "./update-arnables-request.ts";

export const getProcessArnablesPlugin = (options: S3ControlResolvedConfig): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.add(parseOutpostArnablesMiddleaware(options), parseOutpostArnablesMiddleawareOptions);
    clientStack.add(updateArnablesRequestMiddleware, updateArnablesRequestMiddlewareOptions);
  },
});
