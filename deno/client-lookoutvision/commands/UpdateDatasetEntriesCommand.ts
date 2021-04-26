import { LookoutVisionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutVisionClient.ts";
import { UpdateDatasetEntriesRequest, UpdateDatasetEntriesResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1UpdateDatasetEntriesCommand,
  serializeAws_restJson1UpdateDatasetEntriesCommand,
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

export interface UpdateDatasetEntriesCommandInput extends UpdateDatasetEntriesRequest {}
export interface UpdateDatasetEntriesCommandOutput extends UpdateDatasetEntriesResponse, __MetadataBearer {}

/**
 * <p>Adds one or more JSON Line entries to a dataset. A JSON Line includes information about an image
 *          used for training or testing an Amazon Lookout for Vision model. The following is an example JSON Line.</p>
 *
 *
 *          <p>Updating a dataset might take a while to complete. To check the current status, call <a>DescribeDataset</a> and
 *          check the <code>Status</code> field in the response.</p>
 *          <p>This operation requires permissions to perform the
 *          <code>lookoutvision:UpdateDatasetEntries</code> operation.</p>
 */
export class UpdateDatasetEntriesCommand extends $Command<
  UpdateDatasetEntriesCommandInput,
  UpdateDatasetEntriesCommandOutput,
  LookoutVisionClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateDatasetEntriesCommandInput) {
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
  ): Handler<UpdateDatasetEntriesCommandInput, UpdateDatasetEntriesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LookoutVisionClient";
    const commandName = "UpdateDatasetEntriesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateDatasetEntriesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateDatasetEntriesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateDatasetEntriesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateDatasetEntriesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateDatasetEntriesCommandOutput> {
    return deserializeAws_restJson1UpdateDatasetEntriesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
