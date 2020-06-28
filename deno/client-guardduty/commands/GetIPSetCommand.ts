import {
  GuardDutyClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../GuardDutyClient.ts";
import { GetIPSetRequest, GetIPSetResponse } from "../models/index.ts";
import {
  deserializeAws_restJson1GetIPSetCommand,
  serializeAws_restJson1GetIPSetCommand
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

export type GetIPSetCommandInput = GetIPSetRequest;
export type GetIPSetCommandOutput = GetIPSetResponse & __MetadataBearer;

export class GetIPSetCommand extends $Command<
  GetIPSetCommandInput,
  GetIPSetCommandOutput,
  GuardDutyClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetIPSetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GuardDutyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetIPSetCommandInput, GetIPSetCommandOutput> {
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
    input: GetIPSetCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GetIPSetCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetIPSetCommandOutput> {
    return deserializeAws_restJson1GetIPSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
