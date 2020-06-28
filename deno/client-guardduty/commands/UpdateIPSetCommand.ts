import {
  GuardDutyClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../GuardDutyClient.ts";
import { UpdateIPSetRequest, UpdateIPSetResponse } from "../models/index.ts";
import {
  deserializeAws_restJson1UpdateIPSetCommand,
  serializeAws_restJson1UpdateIPSetCommand
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

export type UpdateIPSetCommandInput = UpdateIPSetRequest;
export type UpdateIPSetCommandOutput = UpdateIPSetResponse & __MetadataBearer;

export class UpdateIPSetCommand extends $Command<
  UpdateIPSetCommandInput,
  UpdateIPSetCommandOutput,
  GuardDutyClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateIPSetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GuardDutyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateIPSetCommandInput, UpdateIPSetCommandOutput> {
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
    input: UpdateIPSetCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateIPSetCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateIPSetCommandOutput> {
    return deserializeAws_restJson1UpdateIPSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
