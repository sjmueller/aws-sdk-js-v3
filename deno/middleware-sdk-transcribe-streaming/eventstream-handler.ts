
import {
  BuildHandler,
  BuildHandlerArguments,
  EventStreamPayloadHandler as IEventStreamPayloadHandler,
} from "../types/mod.ts";

export const eventStreamPayloadHandler: IEventStreamPayloadHandler = {
  handle: (next: BuildHandler<any, any>, args: BuildHandlerArguments<any>) => next(args),
};
