import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient.ts";
import { DeleteDatasetImportJobRequest } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DeleteDatasetImportJobCommand,
  serializeAws_json1_1DeleteDatasetImportJobCommand,
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

export interface DeleteDatasetImportJobCommandInput extends DeleteDatasetImportJobRequest {}
export interface DeleteDatasetImportJobCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a dataset import job created using the <a>CreateDatasetImportJob</a>
 *       operation. You can delete only dataset import jobs that have a status of <code>ACTIVE</code>
 *       or <code>CREATE_FAILED</code>. To get the status, use the <a>DescribeDatasetImportJob</a> operation.</p>
 */
export class DeleteDatasetImportJobCommand extends $Command<
  DeleteDatasetImportJobCommandInput,
  DeleteDatasetImportJobCommandOutput,
  ForecastClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteDatasetImportJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ForecastClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteDatasetImportJobCommandInput, DeleteDatasetImportJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ForecastClient";
    const commandName = "DeleteDatasetImportJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteDatasetImportJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteDatasetImportJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteDatasetImportJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteDatasetImportJobCommandOutput> {
    return deserializeAws_json1_1DeleteDatasetImportJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
