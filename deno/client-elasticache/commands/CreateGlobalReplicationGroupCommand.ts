import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient.ts";
import { CreateGlobalReplicationGroupMessage, CreateGlobalReplicationGroupResult } from "../models/models_0.ts";
import {
  deserializeAws_queryCreateGlobalReplicationGroupCommand,
  serializeAws_queryCreateGlobalReplicationGroupCommand,
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

export type CreateGlobalReplicationGroupCommandInput = CreateGlobalReplicationGroupMessage;
export type CreateGlobalReplicationGroupCommandOutput = CreateGlobalReplicationGroupResult & __MetadataBearer;

/**
 * <p>Global Datastore for Redis offers fully managed, fast,
 *             reliable and secure cross-region replication.
 *             Using Global Datastore for Redis, you can create cross-region
 *             read replica clusters for ElastiCache for Redis to enable low-latency reads
 *             and disaster recovery across regions. For more information,
 *
 *             see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Redis-Global-Datastore.html">Replication Across Regions Using Global Datastore</a>. </p>
 *
 *          <ul>
 *             <li>
 *                <p>The <b>GlobalReplicationGroupIdSuffix</b> is the name of the Global datastore.</p>
 *             </li>
 *             <li>
 *                <p>The <b>PrimaryReplicationGroupId</b> represents the name of the primary cluster that accepts writes and will replicate updates to the secondary cluster.</p>
 *             </li>
 *          </ul>
 */
export class CreateGlobalReplicationGroupCommand extends $Command<
  CreateGlobalReplicationGroupCommandInput,
  CreateGlobalReplicationGroupCommandOutput,
  ElastiCacheClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateGlobalReplicationGroupCommandInput) {
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
  ): Handler<CreateGlobalReplicationGroupCommandInput, CreateGlobalReplicationGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "CreateGlobalReplicationGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateGlobalReplicationGroupMessage.filterSensitiveLog,
      outputFilterSensitiveLog: CreateGlobalReplicationGroupResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateGlobalReplicationGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateGlobalReplicationGroupCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateGlobalReplicationGroupCommandOutput> {
    return deserializeAws_queryCreateGlobalReplicationGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
