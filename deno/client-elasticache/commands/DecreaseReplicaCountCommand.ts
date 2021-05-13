import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient.ts";
import { DecreaseReplicaCountMessage, DecreaseReplicaCountResult } from "../models/models_0.ts";
import {
  deserializeAws_queryDecreaseReplicaCountCommand,
  serializeAws_queryDecreaseReplicaCountCommand,
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

export interface DecreaseReplicaCountCommandInput extends DecreaseReplicaCountMessage {}
export interface DecreaseReplicaCountCommandOutput extends DecreaseReplicaCountResult, __MetadataBearer {}

/**
 * <p>Dynamically decreases the number of replicas in a Redis (cluster mode disabled) replication group or the number of
 *             replica nodes in one or more node groups (shards) of a Redis (cluster mode enabled) replication group. This operation
 *             is performed with no cluster down time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DecreaseReplicaCountCommand } from "../../client-elasticache/mod.ts";
 * // const { ElastiCacheClient, DecreaseReplicaCountCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new DecreaseReplicaCountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DecreaseReplicaCountCommandInput} for command's `input` shape.
 * @see {@link DecreaseReplicaCountCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DecreaseReplicaCountCommand extends $Command<
  DecreaseReplicaCountCommandInput,
  DecreaseReplicaCountCommandOutput,
  ElastiCacheClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DecreaseReplicaCountCommandInput) {
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
  ): Handler<DecreaseReplicaCountCommandInput, DecreaseReplicaCountCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "DecreaseReplicaCountCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DecreaseReplicaCountMessage.filterSensitiveLog,
      outputFilterSensitiveLog: DecreaseReplicaCountResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DecreaseReplicaCountCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDecreaseReplicaCountCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DecreaseReplicaCountCommandOutput> {
    return deserializeAws_queryDecreaseReplicaCountCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
