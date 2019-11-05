import {
  RequestSerializer,
  ResponseDeserializer,
  Protocol,
  TransferHandler,
  HttpOptions,
  SerdeContext
} from "@aws-sdk/types";
import { HttpRequest, HttpResponse } from "@aws-sdk/protocol-http";

export class JsonProtocol extends Protocol<
  HttpRequest,
  HttpResponse,
  HttpOptions
> {
  constructor(
    handler: TransferHandler<HttpRequest, HttpResponse, HttpOptions>
  ) {
    super(handler);
  }
  serialize(
    serializer: RequestSerializer<HttpRequest, SerdeContext>,
    input: any,
    utils: SerdeContext
  ) {
    return serializer(input, "aws.json-1.1", utils);
  }
  deserialize(
    deserializer: ResponseDeserializer<HttpResponse, any, SerdeContext>,
    output: HttpResponse,
    utils: SerdeContext
  ) {
    return deserializer(output, "aws.json-1.1", utils) as any;
  }
}