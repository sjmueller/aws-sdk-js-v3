import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient.ts";
import { CompleteMigrationMessage, CompleteMigrationResponse } from "../models/models_0.ts";
import {
  deserializeAws_queryCompleteMigrationCommand,
  serializeAws_queryCompleteMigrationCommand,
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

export interface CompleteMigrationCommandInput extends CompleteMigrationMessage {}
export interface CompleteMigrationCommandOutput extends CompleteMigrationResponse, __MetadataBearer {}

/**
 * <p>Complete the migration of data.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, CompleteMigrationCommand } from "../../client-elasticache/mod.ts";
 * // const { ElastiCacheClient, CompleteMigrationCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new CompleteMigrationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CompleteMigrationCommandInput} for command's `input` shape.
 * @see {@link CompleteMigrationCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CompleteMigrationCommand extends $Command<
  CompleteMigrationCommandInput,
  CompleteMigrationCommandOutput,
  ElastiCacheClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CompleteMigrationCommandInput) {
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
  ): Handler<CompleteMigrationCommandInput, CompleteMigrationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "CompleteMigrationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CompleteMigrationMessage.filterSensitiveLog,
      outputFilterSensitiveLog: CompleteMigrationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CompleteMigrationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCompleteMigrationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CompleteMigrationCommandOutput> {
    return deserializeAws_queryCompleteMigrationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
