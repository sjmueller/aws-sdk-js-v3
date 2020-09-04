import { HttpRequest } from "../protocol-http/mod.ts";
import {
  BuildHandler,
  BuildHandlerArguments,
  BuildHandlerOptions,
  BuildHandlerOutput,
  MetadataBearer,
  Pluggable,
} from "../types/mod.ts";

import { UserAgentResolvedConfig } from "./configurations.ts";

export function userAgentMiddleware(options: UserAgentResolvedConfig) {
  return <Output extends MetadataBearer>(next: BuildHandler<any, any>): BuildHandler<any, any> => (
    args: BuildHandlerArguments<any>
  ): Promise<BuildHandlerOutput<Output>> => {
    const { request } = args;
    if (!HttpRequest.isInstance(request)) return next(args);
    const { headers } = request;
    const userAgentHeader = options.runtime === "node" ? "user-agent" : "x-amz-user-agent";
    if (!headers[userAgentHeader]) {
      headers[userAgentHeader] = `${options.defaultUserAgent}`;
    } else {
      headers[userAgentHeader] += ` ${options.defaultUserAgent}`;
    }
    if (options.customUserAgent) {
      headers[userAgentHeader] += ` ${options.customUserAgent}`;
    }
    return next({
      ...args,
      request,
    });
  };
}

export const getUserAgentMiddlewareOptions: BuildHandlerOptions = {
  name: "getUserAgentMiddleware",
  step: "build",
  tags: ["SET_USER_AGENT", "USER_AGENT"],
};

export const getUserAgentPlugin = (config: UserAgentResolvedConfig): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.add(userAgentMiddleware(config), getUserAgentMiddlewareOptions);
  },
});
