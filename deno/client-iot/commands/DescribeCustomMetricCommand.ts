import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient.ts";
import { DescribeCustomMetricRequest, DescribeCustomMetricResponse } from "../models/models_1.ts";
import {
  deserializeAws_restJson1DescribeCustomMetricCommand,
  serializeAws_restJson1DescribeCustomMetricCommand,
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

export interface DescribeCustomMetricCommandInput extends DescribeCustomMetricRequest {}
export interface DescribeCustomMetricCommandOutput extends DescribeCustomMetricResponse, __MetadataBearer {}

/**
 * <p>
 *       Gets information about a Device Defender detect custom metric.
 *     </p>
 */
export class DescribeCustomMetricCommand extends $Command<
  DescribeCustomMetricCommandInput,
  DescribeCustomMetricCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeCustomMetricCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeCustomMetricCommandInput, DescribeCustomMetricCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "DescribeCustomMetricCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeCustomMetricRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeCustomMetricResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeCustomMetricCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeCustomMetricCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeCustomMetricCommandOutput> {
    return deserializeAws_restJson1DescribeCustomMetricCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
