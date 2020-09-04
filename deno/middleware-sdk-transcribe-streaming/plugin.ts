import { Pluggable } from "../types/mod.ts";

import { WebSocketResolvedConfig } from "./configuration.ts";
import { websocketURLMiddleware, websocketURLMiddlewareOptions } from "./middleware-endpoint.ts";
import { injectSessionIdMiddleware, injectSessionIdMiddlewareOptions } from "./middleware-session-id.ts";

export const getWebSocketPlugin = (config: WebSocketResolvedConfig): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.addRelativeTo(websocketURLMiddleware(config), websocketURLMiddlewareOptions);
    clientStack.add(injectSessionIdMiddleware(config), injectSessionIdMiddlewareOptions);
  },
});
