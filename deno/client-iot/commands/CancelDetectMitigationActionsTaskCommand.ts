import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient.ts";
import {
  CancelDetectMitigationActionsTaskRequest,
  CancelDetectMitigationActionsTaskResponse,
} from "../models/models_0.ts";
import {
  deserializeAws_restJson1CancelDetectMitigationActionsTaskCommand,
  serializeAws_restJson1CancelDetectMitigationActionsTaskCommand,
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

export type CancelDetectMitigationActionsTaskCommandInput = CancelDetectMitigationActionsTaskRequest;
export type CancelDetectMitigationActionsTaskCommandOutput = CancelDetectMitigationActionsTaskResponse &
  __MetadataBearer;

/**
 * <p>
 *         Cancels a Device Defender ML Detect mitigation action.
 *       </p>
 */
export class CancelDetectMitigationActionsTaskCommand extends $Command<
  CancelDetectMitigationActionsTaskCommandInput,
  CancelDetectMitigationActionsTaskCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CancelDetectMitigationActionsTaskCommandInput) {
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
  ): Handler<CancelDetectMitigationActionsTaskCommandInput, CancelDetectMitigationActionsTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "CancelDetectMitigationActionsTaskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CancelDetectMitigationActionsTaskRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CancelDetectMitigationActionsTaskResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CancelDetectMitigationActionsTaskCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1CancelDetectMitigationActionsTaskCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CancelDetectMitigationActionsTaskCommandOutput> {
    return deserializeAws_restJson1CancelDetectMitigationActionsTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
