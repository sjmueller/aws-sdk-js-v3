import { IoTAnalyticsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTAnalyticsClient.ts";
import { DescribeLoggingOptionsRequest, DescribeLoggingOptionsResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DescribeLoggingOptionsCommand,
  serializeAws_restJson1DescribeLoggingOptionsCommand,
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

export interface DescribeLoggingOptionsCommandInput extends DescribeLoggingOptionsRequest {}
export interface DescribeLoggingOptionsCommandOutput extends DescribeLoggingOptionsResponse, __MetadataBearer {}

/**
 * <p>Retrieves the current settings of the IoT Analytics logging options.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTAnalyticsClient, DescribeLoggingOptionsCommand } from "../../client-iotanalytics/mod.ts";
 * // const { IoTAnalyticsClient, DescribeLoggingOptionsCommand } = require("@aws-sdk/client-iotanalytics"); // CommonJS import
 * const client = new IoTAnalyticsClient(config);
 * const command = new DescribeLoggingOptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeLoggingOptionsCommandInput} for command's `input` shape.
 * @see {@link DescribeLoggingOptionsCommandOutput} for command's `response` shape.
 * @see {@link IoTAnalyticsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeLoggingOptionsCommand extends $Command<
  DescribeLoggingOptionsCommandInput,
  DescribeLoggingOptionsCommandOutput,
  IoTAnalyticsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeLoggingOptionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTAnalyticsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeLoggingOptionsCommandInput, DescribeLoggingOptionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTAnalyticsClient";
    const commandName = "DescribeLoggingOptionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeLoggingOptionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeLoggingOptionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeLoggingOptionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeLoggingOptionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeLoggingOptionsCommandOutput> {
    return deserializeAws_restJson1DescribeLoggingOptionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
