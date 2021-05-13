import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient.ts";
import { ModifyGlobalReplicationGroupMessage, ModifyGlobalReplicationGroupResult } from "../models/models_0.ts";
import {
  deserializeAws_queryModifyGlobalReplicationGroupCommand,
  serializeAws_queryModifyGlobalReplicationGroupCommand,
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

export interface ModifyGlobalReplicationGroupCommandInput extends ModifyGlobalReplicationGroupMessage {}
export interface ModifyGlobalReplicationGroupCommandOutput
  extends ModifyGlobalReplicationGroupResult,
    __MetadataBearer {}

/**
 * <p>Modifies the settings for a Global datastore.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, ModifyGlobalReplicationGroupCommand } from "../../client-elasticache/mod.ts";
 * // const { ElastiCacheClient, ModifyGlobalReplicationGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new ModifyGlobalReplicationGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyGlobalReplicationGroupCommandInput} for command's `input` shape.
 * @see {@link ModifyGlobalReplicationGroupCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ModifyGlobalReplicationGroupCommand extends $Command<
  ModifyGlobalReplicationGroupCommandInput,
  ModifyGlobalReplicationGroupCommandOutput,
  ElastiCacheClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyGlobalReplicationGroupCommandInput) {
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
  ): Handler<ModifyGlobalReplicationGroupCommandInput, ModifyGlobalReplicationGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "ModifyGlobalReplicationGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyGlobalReplicationGroupMessage.filterSensitiveLog,
      outputFilterSensitiveLog: ModifyGlobalReplicationGroupResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyGlobalReplicationGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryModifyGlobalReplicationGroupCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyGlobalReplicationGroupCommandOutput> {
    return deserializeAws_queryModifyGlobalReplicationGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
