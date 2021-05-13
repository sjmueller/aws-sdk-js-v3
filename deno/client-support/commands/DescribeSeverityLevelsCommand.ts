import { ServiceInputTypes, ServiceOutputTypes, SupportClientResolvedConfig } from "../SupportClient.ts";
import { DescribeSeverityLevelsRequest, DescribeSeverityLevelsResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DescribeSeverityLevelsCommand,
  serializeAws_json1_1DescribeSeverityLevelsCommand,
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

export interface DescribeSeverityLevelsCommandInput extends DescribeSeverityLevelsRequest {}
export interface DescribeSeverityLevelsCommandOutput extends DescribeSeverityLevelsResponse, __MetadataBearer {}

/**
 * <p>Returns the list of severity levels that you can assign to an AWS Support case. The severity
 *             level for a case is also a field in the <a>CaseDetails</a> data type that you
 *             include for a <a>CreateCase</a> request.</p>
 *         <note>
 *             <ul>
 *                <li>
 *                     <p>You must have a Business or Enterprise support plan to use the AWS Support
 *                         API. </p>
 *                 </li>
 *                <li>
 *                     <p>If you call the AWS Support API from an account that does not have a
 *                         Business or Enterprise support plan, the
 *                             <code>SubscriptionRequiredException</code> error message appears. For
 *                         information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">AWS Support</a>.</p>
 *                 </li>
 *             </ul>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupportClient, DescribeSeverityLevelsCommand } from "../../client-support/mod.ts";
 * // const { SupportClient, DescribeSeverityLevelsCommand } = require("@aws-sdk/client-support"); // CommonJS import
 * const client = new SupportClient(config);
 * const command = new DescribeSeverityLevelsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSeverityLevelsCommandInput} for command's `input` shape.
 * @see {@link DescribeSeverityLevelsCommandOutput} for command's `response` shape.
 * @see {@link SupportClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeSeverityLevelsCommand extends $Command<
  DescribeSeverityLevelsCommandInput,
  DescribeSeverityLevelsCommandOutput,
  SupportClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeSeverityLevelsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SupportClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeSeverityLevelsCommandInput, DescribeSeverityLevelsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SupportClient";
    const commandName = "DescribeSeverityLevelsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeSeverityLevelsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeSeverityLevelsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeSeverityLevelsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeSeverityLevelsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeSeverityLevelsCommandOutput> {
    return deserializeAws_json1_1DescribeSeverityLevelsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
