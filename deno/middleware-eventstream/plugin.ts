import { Pluggable } from "../types/mod.ts";
import { EventStreamResolvedConfig } from "./configuration.ts";
import {
  eventStreamHandlingMiddleware,
  eventStreamHandlingMiddlewareOptions
} from "./handling-middleware.ts";
import {
  eventStreamHeaderMiddleware,
  eventStreamHeaderMiddlewareOptions
} from "./headers-middleware.ts";

export const getEventStreamPlugin = (
  options: EventStreamResolvedConfig
): Pluggable<any, any> => ({
  applyToStack: clientStack => {
    clientStack.addRelativeTo(
      eventStreamHandlingMiddleware(options),
      eventStreamHandlingMiddlewareOptions
    );
    clientStack.add(
      eventStreamHeaderMiddleware,
      eventStreamHeaderMiddlewareOptions
    );
  }
});
