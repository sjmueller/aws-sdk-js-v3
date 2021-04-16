import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient.ts";
import { DeleteBatchPredictionJobRequest, DeleteBatchPredictionJobResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DeleteBatchPredictionJobCommand,
  serializeAws_json1_1DeleteBatchPredictionJobCommand,
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

export type DeleteBatchPredictionJobCommandInput = DeleteBatchPredictionJobRequest;
export type DeleteBatchPredictionJobCommandOutput = DeleteBatchPredictionJobResult & __MetadataBearer;

/**
 * <p>Deletes a batch prediction job.</p>
 */
export class DeleteBatchPredictionJobCommand extends $Command<
  DeleteBatchPredictionJobCommandInput,
  DeleteBatchPredictionJobCommandOutput,
  FraudDetectorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteBatchPredictionJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FraudDetectorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteBatchPredictionJobCommandInput, DeleteBatchPredictionJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FraudDetectorClient";
    const commandName = "DeleteBatchPredictionJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteBatchPredictionJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteBatchPredictionJobResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteBatchPredictionJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteBatchPredictionJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteBatchPredictionJobCommandOutput> {
    return deserializeAws_json1_1DeleteBatchPredictionJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
