import {
  PinpointClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../PinpointClient.ts";
import {
  GetApnsVoipChannelRequest,
  GetApnsVoipChannelResponse
} from "../models/index.ts";
import {
  deserializeAws_restJson1GetApnsVoipChannelCommand,
  serializeAws_restJson1GetApnsVoipChannelCommand
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

export type GetApnsVoipChannelCommandInput = GetApnsVoipChannelRequest;
export type GetApnsVoipChannelCommandOutput = GetApnsVoipChannelResponse &
  __MetadataBearer;

export class GetApnsVoipChannelCommand extends $Command<
  GetApnsVoipChannelCommandInput,
  GetApnsVoipChannelCommandOutput,
  PinpointClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetApnsVoipChannelCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetApnsVoipChannelCommandInput, GetApnsVoipChannelCommandOutput> {
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
    input: GetApnsVoipChannelCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GetApnsVoipChannelCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetApnsVoipChannelCommandOutput> {
    return deserializeAws_restJson1GetApnsVoipChannelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
