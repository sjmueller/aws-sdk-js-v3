import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient.ts";
import { DescribeStandardsControlsRequest, DescribeStandardsControlsResponse } from "../models/models_1.ts";
import {
  deserializeAws_restJson1DescribeStandardsControlsCommand,
  serializeAws_restJson1DescribeStandardsControlsCommand,
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

export interface DescribeStandardsControlsCommandInput extends DescribeStandardsControlsRequest {}
export interface DescribeStandardsControlsCommandOutput extends DescribeStandardsControlsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of security standards controls.</p>
 *          <p>For each control, the results include information about whether it is currently enabled,
 *          the severity, and a link to remediation information.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, DescribeStandardsControlsCommand } from "../../client-securityhub/mod.ts";
 * // const { SecurityHubClient, DescribeStandardsControlsCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new DescribeStandardsControlsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeStandardsControlsCommandInput} for command's `input` shape.
 * @see {@link DescribeStandardsControlsCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeStandardsControlsCommand extends $Command<
  DescribeStandardsControlsCommandInput,
  DescribeStandardsControlsCommandOutput,
  SecurityHubClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeStandardsControlsCommandInput) {
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
  ): Handler<DescribeStandardsControlsCommandInput, DescribeStandardsControlsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "DescribeStandardsControlsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeStandardsControlsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeStandardsControlsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeStandardsControlsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeStandardsControlsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeStandardsControlsCommandOutput> {
    return deserializeAws_restJson1DescribeStandardsControlsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
