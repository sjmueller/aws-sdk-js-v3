import { CloudWatchEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchEventsClient.ts";
import { DescribePartnerEventSourceRequest, DescribePartnerEventSourceResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DescribePartnerEventSourceCommand,
  serializeAws_json1_1DescribePartnerEventSourceCommand,
} from "../protocols/Aws_json1_1.ts";
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

export interface DescribePartnerEventSourceCommandInput extends DescribePartnerEventSourceRequest {}
export interface DescribePartnerEventSourceCommandOutput extends DescribePartnerEventSourceResponse, __MetadataBearer {}

/**
 * <p>An SaaS partner can use this operation to list details about a partner event source that
 *       they have created. AWS customers do not use this operation. Instead, AWS customers can use
 *         <a>DescribeEventSource</a> to see details about a partner event source that is
 *       shared with them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchEventsClient, DescribePartnerEventSourceCommand } from "../../client-cloudwatch-events/mod.ts";
 * // const { CloudWatchEventsClient, DescribePartnerEventSourceCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * const client = new CloudWatchEventsClient(config);
 * const command = new DescribePartnerEventSourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePartnerEventSourceCommandInput} for command's `input` shape.
 * @see {@link DescribePartnerEventSourceCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchEventsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribePartnerEventSourceCommand extends $Command<
  DescribePartnerEventSourceCommandInput,
  DescribePartnerEventSourceCommandOutput,
  CloudWatchEventsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribePartnerEventSourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchEventsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribePartnerEventSourceCommandInput, DescribePartnerEventSourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchEventsClient";
    const commandName = "DescribePartnerEventSourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribePartnerEventSourceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribePartnerEventSourceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribePartnerEventSourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribePartnerEventSourceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribePartnerEventSourceCommandOutput> {
    return deserializeAws_json1_1DescribePartnerEventSourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
