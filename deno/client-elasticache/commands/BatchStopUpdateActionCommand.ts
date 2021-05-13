import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient.ts";
import { BatchStopUpdateActionMessage, UpdateActionResultsMessage } from "../models/models_0.ts";
import {
  deserializeAws_queryBatchStopUpdateActionCommand,
  serializeAws_queryBatchStopUpdateActionCommand,
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

export interface BatchStopUpdateActionCommandInput extends BatchStopUpdateActionMessage {}
export interface BatchStopUpdateActionCommandOutput extends UpdateActionResultsMessage, __MetadataBearer {}

/**
 * <p>Stop the service update. For more information on service updates and stopping them, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/stopping-self-service-updates.html">Stopping Service Updates</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, BatchStopUpdateActionCommand } from "../../client-elasticache/mod.ts";
 * // const { ElastiCacheClient, BatchStopUpdateActionCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new BatchStopUpdateActionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchStopUpdateActionCommandInput} for command's `input` shape.
 * @see {@link BatchStopUpdateActionCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class BatchStopUpdateActionCommand extends $Command<
  BatchStopUpdateActionCommandInput,
  BatchStopUpdateActionCommandOutput,
  ElastiCacheClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchStopUpdateActionCommandInput) {
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
  ): Handler<BatchStopUpdateActionCommandInput, BatchStopUpdateActionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "BatchStopUpdateActionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchStopUpdateActionMessage.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateActionResultsMessage.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchStopUpdateActionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryBatchStopUpdateActionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchStopUpdateActionCommandOutput> {
    return deserializeAws_queryBatchStopUpdateActionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
