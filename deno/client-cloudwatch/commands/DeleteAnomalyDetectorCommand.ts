import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient.ts";
import { DeleteAnomalyDetectorInput, DeleteAnomalyDetectorOutput } from "../models/models_0.ts";
import {
  deserializeAws_queryDeleteAnomalyDetectorCommand,
  serializeAws_queryDeleteAnomalyDetectorCommand,
} from "../protocols/Aws_query.ts";
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

export interface DeleteAnomalyDetectorCommandInput extends DeleteAnomalyDetectorInput {}
export interface DeleteAnomalyDetectorCommandOutput extends DeleteAnomalyDetectorOutput, __MetadataBearer {}

/**
 * <p>Deletes the specified anomaly detection model from your account.</p>
 */
export class DeleteAnomalyDetectorCommand extends $Command<
  DeleteAnomalyDetectorCommandInput,
  DeleteAnomalyDetectorCommandOutput,
  CloudWatchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteAnomalyDetectorCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteAnomalyDetectorCommandInput, DeleteAnomalyDetectorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchClient";
    const commandName = "DeleteAnomalyDetectorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteAnomalyDetectorInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteAnomalyDetectorOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteAnomalyDetectorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteAnomalyDetectorCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteAnomalyDetectorCommandOutput> {
    return deserializeAws_queryDeleteAnomalyDetectorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
