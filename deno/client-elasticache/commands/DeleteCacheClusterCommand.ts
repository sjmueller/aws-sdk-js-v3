import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient.ts";
import { DeleteCacheClusterMessage, DeleteCacheClusterResult } from "../models/models_0.ts";
import {
  deserializeAws_queryDeleteCacheClusterCommand,
  serializeAws_queryDeleteCacheClusterCommand,
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

export interface DeleteCacheClusterCommandInput extends DeleteCacheClusterMessage {}
export interface DeleteCacheClusterCommandOutput extends DeleteCacheClusterResult, __MetadataBearer {}

/**
 * <p>Deletes a previously provisioned cluster.
 *                 <code>DeleteCacheCluster</code> deletes all associated cache nodes, node endpoints and the
 *             cluster itself. When you receive a successful response from this operation,
 *             Amazon ElastiCache immediately begins deleting the cluster; you cannot cancel or revert
 *             this operation.</p>
 *         <p>This operation is not valid for:</p>
 *         <ul>
 *             <li>
 *                 <p>Redis (cluster mode enabled) clusters</p>
 *             </li>
 *             <li>
 *                 <p>Redis (cluster mode disabled) clusters</p>
 *             </li>
 *             <li>
 *
 *                 <p>A cluster that is the last read replica of a replication group</p>
 *             </li>
 *             <li>
 *                 <p>A cluster that is the primary node of a replication group</p>
 *             </li>
 *             <li>
 *                 <p>A node group (shard) that has Multi-AZ mode enabled</p>
 *             </li>
 *             <li>
 *                 <p>A cluster from a Redis (cluster mode enabled) replication group</p>
 *             </li>
 *             <li>
 *                 <p>A cluster that is not in the <code>available</code> state</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DeleteCacheClusterCommand } from "../../client-elasticache/mod.ts";
 * // const { ElastiCacheClient, DeleteCacheClusterCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new DeleteCacheClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteCacheClusterCommandInput} for command's `input` shape.
 * @see {@link DeleteCacheClusterCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteCacheClusterCommand extends $Command<
  DeleteCacheClusterCommandInput,
  DeleteCacheClusterCommandOutput,
  ElastiCacheClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteCacheClusterCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElastiCacheClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteCacheClusterCommandInput, DeleteCacheClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "DeleteCacheClusterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteCacheClusterMessage.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteCacheClusterResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteCacheClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteCacheClusterCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteCacheClusterCommandOutput> {
    return deserializeAws_queryDeleteCacheClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
