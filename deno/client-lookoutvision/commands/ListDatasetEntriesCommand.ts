import { LookoutVisionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutVisionClient.ts";
import { ListDatasetEntriesRequest, ListDatasetEntriesResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListDatasetEntriesCommand,
  serializeAws_restJson1ListDatasetEntriesCommand,
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

export interface ListDatasetEntriesCommandInput extends ListDatasetEntriesRequest {}
export interface ListDatasetEntriesCommandOutput extends ListDatasetEntriesResponse, __MetadataBearer {}

/**
 * <p>Lists the JSON Lines within a dataset. An Amazon Lookout for Vision JSON Line contains the anomaly
 *       information for a single image, including the image location and the assigned label.</p>
 *          <p>This operation requires permissions to perform the
 *          <code>lookoutvision:ListDatasetEntries</code> operation.</p>
 */
export class ListDatasetEntriesCommand extends $Command<
  ListDatasetEntriesCommandInput,
  ListDatasetEntriesCommandOutput,
  LookoutVisionClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListDatasetEntriesCommandInput) {
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
  ): Handler<ListDatasetEntriesCommandInput, ListDatasetEntriesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LookoutVisionClient";
    const commandName = "ListDatasetEntriesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListDatasetEntriesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListDatasetEntriesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListDatasetEntriesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListDatasetEntriesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDatasetEntriesCommandOutput> {
    return deserializeAws_restJson1ListDatasetEntriesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
