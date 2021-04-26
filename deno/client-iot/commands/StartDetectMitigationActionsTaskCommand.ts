import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient.ts";
import { StartDetectMitigationActionsTaskRequest, StartDetectMitigationActionsTaskResponse } from "../models/models_2.ts";
import {
  deserializeAws_restJson1StartDetectMitigationActionsTaskCommand,
  serializeAws_restJson1StartDetectMitigationActionsTaskCommand,
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

export interface StartDetectMitigationActionsTaskCommandInput extends StartDetectMitigationActionsTaskRequest {}
export interface StartDetectMitigationActionsTaskCommandOutput
  extends StartDetectMitigationActionsTaskResponse,
    __MetadataBearer {}

/**
 * <p>
 *       Starts a Device Defender ML Detect mitigation actions task.
 *     </p>
 */
export class StartDetectMitigationActionsTaskCommand extends $Command<
  StartDetectMitigationActionsTaskCommandInput,
  StartDetectMitigationActionsTaskCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartDetectMitigationActionsTaskCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartDetectMitigationActionsTaskCommandInput, StartDetectMitigationActionsTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "StartDetectMitigationActionsTaskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartDetectMitigationActionsTaskRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartDetectMitigationActionsTaskResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: StartDetectMitigationActionsTaskCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1StartDetectMitigationActionsTaskCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartDetectMitigationActionsTaskCommandOutput> {
    return deserializeAws_restJson1StartDetectMitigationActionsTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
