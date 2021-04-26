import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient.ts";
import { DescribeReplicationGroupsMessage, ReplicationGroupMessage } from "../models/models_0.ts";
import {
  deserializeAws_queryDescribeReplicationGroupsCommand,
  serializeAws_queryDescribeReplicationGroupsCommand,
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

export interface DescribeReplicationGroupsCommandInput extends DescribeReplicationGroupsMessage {}
export interface DescribeReplicationGroupsCommandOutput extends ReplicationGroupMessage, __MetadataBearer {}

/**
 * <p>Returns information about a particular
 *             replication group. If no identifier is specified, <code>DescribeReplicationGroups</code>
 *             returns information about all replication groups.</p>
 *         <note>
 *             <p>This operation is valid for Redis only.</p>
 *          </note>
 */
export class DescribeReplicationGroupsCommand extends $Command<
  DescribeReplicationGroupsCommandInput,
  DescribeReplicationGroupsCommandOutput,
  ElastiCacheClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeReplicationGroupsCommandInput) {
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
  ): Handler<DescribeReplicationGroupsCommandInput, DescribeReplicationGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "DescribeReplicationGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeReplicationGroupsMessage.filterSensitiveLog,
      outputFilterSensitiveLog: ReplicationGroupMessage.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeReplicationGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeReplicationGroupsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeReplicationGroupsCommandOutput> {
    return deserializeAws_queryDescribeReplicationGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
