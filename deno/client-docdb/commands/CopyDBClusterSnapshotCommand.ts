import { DocDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBClient.ts";
import { CopyDBClusterSnapshotMessage, CopyDBClusterSnapshotResult } from "../models/models_0.ts";
import {
  deserializeAws_queryCopyDBClusterSnapshotCommand,
  serializeAws_queryCopyDBClusterSnapshotCommand,
} from "../protocols/Aws_query.ts";
import { getCrossRegionPresignedUrlPlugin } from "../../middleware-sdk-rds/mod.ts";
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

export interface CopyDBClusterSnapshotCommandInput extends CopyDBClusterSnapshotMessage {}
export interface CopyDBClusterSnapshotCommandOutput extends CopyDBClusterSnapshotResult, __MetadataBearer {}

/**
 * <p>Copies a snapshot of a cluster.</p>
 *
 *         <p>To copy a cluster snapshot from a shared manual cluster snapshot,
 *             <code>SourceDBClusterSnapshotIdentifier</code> must be the Amazon
 *             Resource Name (ARN) of the shared cluster snapshot. You can only
 *             copy a shared DB cluster snapshot, whether encrypted or not, in the
 *             same Region.</p>
 *
 *         <p>To cancel the copy operation after it is in progress, delete the
 *             target cluster snapshot identified by
 *             <code>TargetDBClusterSnapshotIdentifier</code> while that cluster
 *             snapshot is in the <i>copying</i> status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBClient, CopyDBClusterSnapshotCommand } from "../../client-docdb/mod.ts";
 * // const { DocDBClient, CopyDBClusterSnapshotCommand } = require("@aws-sdk/client-docdb"); // CommonJS import
 * const client = new DocDBClient(config);
 * const command = new CopyDBClusterSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CopyDBClusterSnapshotCommandInput} for command's `input` shape.
 * @see {@link CopyDBClusterSnapshotCommandOutput} for command's `response` shape.
 * @see {@link DocDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CopyDBClusterSnapshotCommand extends $Command<
  CopyDBClusterSnapshotCommandInput,
  CopyDBClusterSnapshotCommandOutput,
  DocDBClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CopyDBClusterSnapshotCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DocDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CopyDBClusterSnapshotCommandInput, CopyDBClusterSnapshotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getCrossRegionPresignedUrlPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DocDBClient";
    const commandName = "CopyDBClusterSnapshotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CopyDBClusterSnapshotMessage.filterSensitiveLog,
      outputFilterSensitiveLog: CopyDBClusterSnapshotResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CopyDBClusterSnapshotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCopyDBClusterSnapshotCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CopyDBClusterSnapshotCommandOutput> {
    return deserializeAws_queryCopyDBClusterSnapshotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
