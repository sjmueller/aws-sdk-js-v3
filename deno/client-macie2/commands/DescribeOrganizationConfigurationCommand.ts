import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client.ts";
import {
  DescribeOrganizationConfigurationRequest,
  DescribeOrganizationConfigurationResponse,
} from "../models/models_0.ts";
import {
  deserializeAws_restJson1DescribeOrganizationConfigurationCommand,
  serializeAws_restJson1DescribeOrganizationConfigurationCommand,
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

export interface DescribeOrganizationConfigurationCommandInput extends DescribeOrganizationConfigurationRequest {}
export interface DescribeOrganizationConfigurationCommandOutput
  extends DescribeOrganizationConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves the Amazon Macie configuration settings for an Amazon Web Services organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, DescribeOrganizationConfigurationCommand } from "../../client-macie2/mod.ts";
 * // const { Macie2Client, DescribeOrganizationConfigurationCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new DescribeOrganizationConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeOrganizationConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeOrganizationConfigurationCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeOrganizationConfigurationCommand extends $Command<
  DescribeOrganizationConfigurationCommandInput,
  DescribeOrganizationConfigurationCommandOutput,
  Macie2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeOrganizationConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Macie2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeOrganizationConfigurationCommandInput, DescribeOrganizationConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Macie2Client";
    const commandName = "DescribeOrganizationConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeOrganizationConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeOrganizationConfigurationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeOrganizationConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeOrganizationConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeOrganizationConfigurationCommandOutput> {
    return deserializeAws_restJson1DescribeOrganizationConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
