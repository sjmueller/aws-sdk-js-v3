import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient.ts";
import { CreateInsightRequest, CreateInsightResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1CreateInsightCommand,
  serializeAws_restJson1CreateInsightCommand,
} from "../protocols/Aws_restJson1.ts";
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

export interface CreateInsightCommandInput extends CreateInsightRequest {}
export interface CreateInsightCommandOutput extends CreateInsightResponse, __MetadataBearer {}

/**
 * <p>Creates a custom insight in Security Hub. An insight is a consolidation of findings that relate
 *          to a security issue that requires attention or remediation.</p>
 *          <p>To group the related findings in the insight, use the
 *          <code>GroupByAttribute</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, CreateInsightCommand } from "../../client-securityhub/mod.ts";
 * // const { SecurityHubClient, CreateInsightCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new CreateInsightCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateInsightCommandInput} for command's `input` shape.
 * @see {@link CreateInsightCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateInsightCommand extends $Command<
  CreateInsightCommandInput,
  CreateInsightCommandOutput,
  SecurityHubClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateInsightCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecurityHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateInsightCommandInput, CreateInsightCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "CreateInsightCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateInsightRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateInsightResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateInsightCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateInsightCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateInsightCommandOutput> {
    return deserializeAws_restJson1CreateInsightCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
