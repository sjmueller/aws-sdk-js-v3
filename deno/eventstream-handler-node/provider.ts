import { Decoder, Encoder, EventSigner, EventStreamPayloadHandlerProvider, Provider } from "../types/mod.ts";

import { EventStreamPayloadHandler } from "./EventStreamPayloadHandler.ts";

/** NodeJS event stream utils provider */
export const eventStreamPayloadHandlerProvider: EventStreamPayloadHandlerProvider = (options: {
  utf8Encoder: Encoder;
  utf8Decoder: Decoder;
  eventSigner: Provider<EventSigner>;
}) => new EventStreamPayloadHandler(options);
