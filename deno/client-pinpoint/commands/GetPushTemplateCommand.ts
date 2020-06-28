import {
  PinpointClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../PinpointClient.ts";
import {
  GetPushTemplateRequest,
  GetPushTemplateResponse
} from "../models/index.ts";
import {
  deserializeAws_restJson1GetPushTemplateCommand,
  serializeAws_restJson1GetPushTemplateCommand
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

export type GetPushTemplateCommandInput = GetPushTemplateRequest;
export type GetPushTemplateCommandOutput = GetPushTemplateResponse &
  __MetadataBearer;

export class GetPushTemplateCommand extends $Command<
  GetPushTemplateCommandInput,
  GetPushTemplateCommandOutput,
  PinpointClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetPushTemplateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetPushTemplateCommandInput, GetPushTemplateCommandOutput> {
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
    input: GetPushTemplateCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GetPushTemplateCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetPushTemplateCommandOutput> {
    return deserializeAws_restJson1GetPushTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
