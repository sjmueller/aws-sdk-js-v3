import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient.ts";
import {
  DeleteColumnStatisticsForPartitionRequest,
  DeleteColumnStatisticsForPartitionResponse,
} from "../models/models_0.ts";
import {
  deserializeAws_json1_1DeleteColumnStatisticsForPartitionCommand,
  serializeAws_json1_1DeleteColumnStatisticsForPartitionCommand,
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

export interface DeleteColumnStatisticsForPartitionCommandInput extends DeleteColumnStatisticsForPartitionRequest {}
export interface DeleteColumnStatisticsForPartitionCommandOutput
  extends DeleteColumnStatisticsForPartitionResponse,
    __MetadataBearer {}

/**
 * <p>Delete the partition column statistics of a column.</p>
 *
 * 	        <p>The Identity and Access Management (IAM) permission required for this operation is <code>DeletePartition</code>.</p>
 */
export class DeleteColumnStatisticsForPartitionCommand extends $Command<
  DeleteColumnStatisticsForPartitionCommandInput,
  DeleteColumnStatisticsForPartitionCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteColumnStatisticsForPartitionCommandInput) {
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
  ): Handler<DeleteColumnStatisticsForPartitionCommandInput, DeleteColumnStatisticsForPartitionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "DeleteColumnStatisticsForPartitionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteColumnStatisticsForPartitionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteColumnStatisticsForPartitionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteColumnStatisticsForPartitionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteColumnStatisticsForPartitionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteColumnStatisticsForPartitionCommandOutput> {
    return deserializeAws_json1_1DeleteColumnStatisticsForPartitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
