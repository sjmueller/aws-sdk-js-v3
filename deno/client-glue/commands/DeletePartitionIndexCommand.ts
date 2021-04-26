import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient.ts";
import { DeletePartitionIndexRequest, DeletePartitionIndexResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DeletePartitionIndexCommand,
  serializeAws_json1_1DeletePartitionIndexCommand,
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

export interface DeletePartitionIndexCommandInput extends DeletePartitionIndexRequest {}
export interface DeletePartitionIndexCommandOutput extends DeletePartitionIndexResponse, __MetadataBearer {}

/**
 * <p>Deletes a specified partition index from an existing table.</p>
 */
export class DeletePartitionIndexCommand extends $Command<
  DeletePartitionIndexCommandInput,
  DeletePartitionIndexCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeletePartitionIndexCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeletePartitionIndexCommandInput, DeletePartitionIndexCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "DeletePartitionIndexCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeletePartitionIndexRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeletePartitionIndexResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeletePartitionIndexCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeletePartitionIndexCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeletePartitionIndexCommandOutput> {
    return deserializeAws_json1_1DeletePartitionIndexCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
