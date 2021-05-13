import { HealthClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HealthClient.ts";
import { DescribeEventAggregatesRequest, DescribeEventAggregatesResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DescribeEventAggregatesCommand,
  serializeAws_json1_1DescribeEventAggregatesCommand,
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

export interface DescribeEventAggregatesCommandInput extends DescribeEventAggregatesRequest {}
export interface DescribeEventAggregatesCommandOutput extends DescribeEventAggregatesResponse, __MetadataBearer {}

/**
 * <p>Returns the number of events of each event type (issue, scheduled change, and account
 *          notification). If no filter is specified, the counts of all events in each category are
 *          returned.</p>
 *
 *          <note>
 *             <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the next request to return more results.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthClient, DescribeEventAggregatesCommand } from "../../client-health/mod.ts";
 * // const { HealthClient, DescribeEventAggregatesCommand } = require("@aws-sdk/client-health"); // CommonJS import
 * const client = new HealthClient(config);
 * const command = new DescribeEventAggregatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEventAggregatesCommandInput} for command's `input` shape.
 * @see {@link DescribeEventAggregatesCommandOutput} for command's `response` shape.
 * @see {@link HealthClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeEventAggregatesCommand extends $Command<
  DescribeEventAggregatesCommandInput,
  DescribeEventAggregatesCommandOutput,
  HealthClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeEventAggregatesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: HealthClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeEventAggregatesCommandInput, DescribeEventAggregatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "HealthClient";
    const commandName = "DescribeEventAggregatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeEventAggregatesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeEventAggregatesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeEventAggregatesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeEventAggregatesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeEventAggregatesCommandOutput> {
    return deserializeAws_json1_1DescribeEventAggregatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
