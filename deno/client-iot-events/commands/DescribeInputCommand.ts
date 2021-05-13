import { IoTEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsClient.ts";
import { DescribeInputRequest, DescribeInputResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DescribeInputCommand,
  serializeAws_restJson1DescribeInputCommand,
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

export interface DescribeInputCommandInput extends DescribeInputRequest {}
export interface DescribeInputCommandOutput extends DescribeInputResponse, __MetadataBearer {}

/**
 * <p>Describes an input.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsClient, DescribeInputCommand } from "../../client-iot-events/mod.ts";
 * // const { IoTEventsClient, DescribeInputCommand } = require("@aws-sdk/client-iot-events"); // CommonJS import
 * const client = new IoTEventsClient(config);
 * const command = new DescribeInputCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeInputCommandInput} for command's `input` shape.
 * @see {@link DescribeInputCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeInputCommand extends $Command<
  DescribeInputCommandInput,
  DescribeInputCommandOutput,
  IoTEventsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeInputCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTEventsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeInputCommandInput, DescribeInputCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTEventsClient";
    const commandName = "DescribeInputCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeInputRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeInputResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeInputCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeInputCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeInputCommandOutput> {
    return deserializeAws_restJson1DescribeInputCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
