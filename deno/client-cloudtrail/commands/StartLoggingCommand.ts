import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient.ts";
import { StartLoggingRequest, StartLoggingResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1StartLoggingCommand,
  serializeAws_json1_1StartLoggingCommand,
} from "../protocols/Aws_json1_1.ts";
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

export interface StartLoggingCommandInput extends StartLoggingRequest {}
export interface StartLoggingCommandOutput extends StartLoggingResponse, __MetadataBearer {}

/**
 * <p>Starts the recording of AWS API calls and log file delivery for a trail. For a trail that is enabled in all regions, this operation must be called from the region in which the trail was created. This operation cannot be called on the shadow trails (replicated trails in other regions) of a trail that is enabled in all regions.</p>
 */
export class StartLoggingCommand extends $Command<
  StartLoggingCommandInput,
  StartLoggingCommandOutput,
  CloudTrailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartLoggingCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudTrailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartLoggingCommandInput, StartLoggingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudTrailClient";
    const commandName = "StartLoggingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartLoggingRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartLoggingResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartLoggingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartLoggingCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartLoggingCommandOutput> {
    return deserializeAws_json1_1StartLoggingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
