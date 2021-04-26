import {
  SageMakerA2IRuntimeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../SageMakerA2IRuntimeClient.ts";
import { StopHumanLoopRequest, StopHumanLoopResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1StopHumanLoopCommand,
  serializeAws_restJson1StopHumanLoopCommand,
} from "../protocols/Aws_restJson1.ts";
import { getSerdePlugin } from "../../middleware-serde/mod.ts";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "../../protocol-http/mod.ts";
import { Command as $Command } from "../../smithy-client/mod.ts";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "../../types/mod.ts";

export interface StopHumanLoopCommandInput extends StopHumanLoopRequest {}
export interface StopHumanLoopCommandOutput extends StopHumanLoopResponse, __MetadataBearer {}

/**
 * <p>Stops the specified human loop.</p>
 */
export class StopHumanLoopCommand extends $Command<
  StopHumanLoopCommandInput,
  StopHumanLoopCommandOutput,
  SageMakerA2IRuntimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StopHumanLoopCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerA2IRuntimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StopHumanLoopCommandInput, StopHumanLoopCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerA2IRuntimeClient";
    const commandName = "StopHumanLoopCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopHumanLoopRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StopHumanLoopResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopHumanLoopCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StopHumanLoopCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopHumanLoopCommandOutput> {
    return deserializeAws_restJson1StopHumanLoopCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
