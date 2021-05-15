import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient.ts";
import { DescribeActionTargetsRequest, DescribeActionTargetsResponse } from "../models/models_1.ts";
import {
  deserializeAws_restJson1DescribeActionTargetsCommand,
  serializeAws_restJson1DescribeActionTargetsCommand,
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

export interface DescribeActionTargetsCommandInput extends DescribeActionTargetsRequest {}
export interface DescribeActionTargetsCommandOutput extends DescribeActionTargetsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of the custom action targets in Security Hub in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, DescribeActionTargetsCommand } from "../../client-securityhub/mod.ts";
 * // const { SecurityHubClient, DescribeActionTargetsCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new DescribeActionTargetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeActionTargetsCommandInput} for command's `input` shape.
 * @see {@link DescribeActionTargetsCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeActionTargetsCommand extends $Command<
  DescribeActionTargetsCommandInput,
  DescribeActionTargetsCommandOutput,
  SecurityHubClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeActionTargetsCommandInput) {
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
  ): Handler<DescribeActionTargetsCommandInput, DescribeActionTargetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "DescribeActionTargetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeActionTargetsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeActionTargetsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeActionTargetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeActionTargetsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeActionTargetsCommandOutput> {
    return deserializeAws_restJson1DescribeActionTargetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
