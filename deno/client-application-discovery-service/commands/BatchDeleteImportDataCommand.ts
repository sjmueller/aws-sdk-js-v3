import {
  ApplicationDiscoveryServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationDiscoveryServiceClient.ts";
import { BatchDeleteImportDataRequest, BatchDeleteImportDataResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1BatchDeleteImportDataCommand,
  serializeAws_json1_1BatchDeleteImportDataCommand,
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

export interface BatchDeleteImportDataCommandInput extends BatchDeleteImportDataRequest {}
export interface BatchDeleteImportDataCommandOutput extends BatchDeleteImportDataResponse, __MetadataBearer {}

/**
 * <p>Deletes one or more import tasks, each identified by their import ID. Each import task has
 *       a number of records that can identify servers or applications. </p>
 *
 *          <p>AWS Application Discovery Service has built-in matching logic that will identify when
 *       discovered servers match existing entries that you've previously discovered, the information
 *       for the already-existing discovered server is updated. When you delete an import task that
 *       contains records that were used to match, the information in those matched records that comes
 *       from the deleted records will also be deleted.</p>
 */
export class BatchDeleteImportDataCommand extends $Command<
  BatchDeleteImportDataCommandInput,
  BatchDeleteImportDataCommandOutput,
  ApplicationDiscoveryServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchDeleteImportDataCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApplicationDiscoveryServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchDeleteImportDataCommandInput, BatchDeleteImportDataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApplicationDiscoveryServiceClient";
    const commandName = "BatchDeleteImportDataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchDeleteImportDataRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchDeleteImportDataResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchDeleteImportDataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1BatchDeleteImportDataCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchDeleteImportDataCommandOutput> {
    return deserializeAws_json1_1BatchDeleteImportDataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
