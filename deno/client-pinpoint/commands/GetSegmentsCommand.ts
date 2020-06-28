import {
  PinpointClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../PinpointClient.ts";
import { GetSegmentsRequest, GetSegmentsResponse } from "../models/index.ts";
import {
  deserializeAws_restJson1GetSegmentsCommand,
  serializeAws_restJson1GetSegmentsCommand
} from "../protocols/Aws_restJson1.ts";
import { getSerdePlugin } from "../../middleware-serde/mod.ts";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "../../protocol-http/mod.ts";
import { Command as $Command } from "../../smithy-client/mod.ts";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext
} from "../../types/mod.ts";

export type GetSegmentsCommandInput = GetSegmentsRequest;
export type GetSegmentsCommandOutput = GetSegmentsResponse & __MetadataBearer;

export class GetSegmentsCommand extends $Command<
  GetSegmentsCommandInput,
  GetSegmentsCommandOutput,
  PinpointClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetSegmentsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSegmentsCommandInput, GetSegmentsCommandOutput> {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetSegmentsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GetSegmentsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetSegmentsCommandOutput> {
    return deserializeAws_restJson1GetSegmentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
