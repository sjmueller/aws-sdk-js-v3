import { MachineLearningClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MachineLearningClient.ts";
import { UpdateBatchPredictionInput, UpdateBatchPredictionOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1UpdateBatchPredictionCommand,
  serializeAws_json1_1UpdateBatchPredictionCommand,
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

export interface UpdateBatchPredictionCommandInput extends UpdateBatchPredictionInput {}
export interface UpdateBatchPredictionCommandOutput extends UpdateBatchPredictionOutput, __MetadataBearer {}

/**
 * <p>Updates the <code>BatchPredictionName</code> of a <code>BatchPrediction</code>.</p>
 *         <p>You can use the <code>GetBatchPrediction</code> operation to view the contents of the updated data element.</p>
 */
export class UpdateBatchPredictionCommand extends $Command<
  UpdateBatchPredictionCommandInput,
  UpdateBatchPredictionCommandOutput,
  MachineLearningClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateBatchPredictionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MachineLearningClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateBatchPredictionCommandInput, UpdateBatchPredictionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MachineLearningClient";
    const commandName = "UpdateBatchPredictionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateBatchPredictionInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateBatchPredictionOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateBatchPredictionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateBatchPredictionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateBatchPredictionCommandOutput> {
    return deserializeAws_json1_1UpdateBatchPredictionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
