import {
  EventStreamPayloadHandler as IEventStreamPayloadHandler,
  BuildHandler,
  BuildHandlerArguments
} from "../types/mod.ts";

export const eventStreamPayloadHandler: IEventStreamPayloadHandler = {
  handle: (next: BuildHandler<any, any>, args: BuildHandlerArguments<any>) =>
    next(args)
};
