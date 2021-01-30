import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient.ts";
import { BatchModifyClusterSnapshotsMessage, BatchModifyClusterSnapshotsOutputMessage } from "../models/models_0.ts";
import {
  deserializeAws_queryBatchModifyClusterSnapshotsCommand,
  serializeAws_queryBatchModifyClusterSnapshotsCommand,
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

export type BatchModifyClusterSnapshotsCommandInput = BatchModifyClusterSnapshotsMessage;
export type BatchModifyClusterSnapshotsCommandOutput = BatchModifyClusterSnapshotsOutputMessage & __MetadataBearer;

/**
 * <p>Modifies the settings for a set of cluster snapshots.</p>
 */
export class BatchModifyClusterSnapshotsCommand extends $Command<
  BatchModifyClusterSnapshotsCommandInput,
  BatchModifyClusterSnapshotsCommandOutput,
  RedshiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchModifyClusterSnapshotsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchModifyClusterSnapshotsCommandInput, BatchModifyClusterSnapshotsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "BatchModifyClusterSnapshotsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchModifyClusterSnapshotsMessage.filterSensitiveLog,
      outputFilterSensitiveLog: BatchModifyClusterSnapshotsOutputMessage.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchModifyClusterSnapshotsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryBatchModifyClusterSnapshotsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchModifyClusterSnapshotsCommandOutput> {
    return deserializeAws_queryBatchModifyClusterSnapshotsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
