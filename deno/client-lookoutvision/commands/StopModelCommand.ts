import { LookoutVisionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutVisionClient.ts";
import { StopModelRequest, StopModelResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1StopModelCommand,
  serializeAws_restJson1StopModelCommand,
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

export type StopModelCommandInput = StopModelRequest;
export type StopModelCommandOutput = StopModelResponse & __MetadataBearer;

/**
 * <p>Stops the hosting of a running model. The operation might take a while to complete. To
 *          check the current status, call <a>DescribeModel</a>. </p>
 *          <p>After the model hosting stops, the <code>Status</code> of the model is <code>TRAINED</code>.</p>
 *          <p>This operation requires permissions to perform the
 *          <code>lookoutvision:StopModel</code> operation.</p>
 */
export class StopModelCommand extends $Command<
  StopModelCommandInput,
  StopModelCommandOutput,
  LookoutVisionClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StopModelCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LookoutVisionClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StopModelCommandInput, StopModelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LookoutVisionClient";
    const commandName = "StopModelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopModelRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StopModelResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopModelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StopModelCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopModelCommandOutput> {
    return deserializeAws_restJson1StopModelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
