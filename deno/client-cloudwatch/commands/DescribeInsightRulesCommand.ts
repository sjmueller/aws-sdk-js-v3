import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient.ts";
import { DescribeInsightRulesInput, DescribeInsightRulesOutput } from "../models/models_0.ts";
import {
  deserializeAws_queryDescribeInsightRulesCommand,
  serializeAws_queryDescribeInsightRulesCommand,
} from "../protocols/Aws_query.ts";
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

export interface DescribeInsightRulesCommandInput extends DescribeInsightRulesInput {}
export interface DescribeInsightRulesCommandOutput extends DescribeInsightRulesOutput, __MetadataBearer {}

/**
 * <p>Returns a list of all the Contributor Insights rules in your account.</p>
 *
 * 		       <p>For more information about Contributor Insights, see
 * 		<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/ContributorInsights.html">Using Contributor Insights to Analyze High-Cardinality Data</a>.</p>
 */
export class DescribeInsightRulesCommand extends $Command<
  DescribeInsightRulesCommandInput,
  DescribeInsightRulesCommandOutput,
  CloudWatchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeInsightRulesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeInsightRulesCommandInput, DescribeInsightRulesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchClient";
    const commandName = "DescribeInsightRulesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeInsightRulesInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeInsightRulesOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeInsightRulesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeInsightRulesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeInsightRulesCommandOutput> {
    return deserializeAws_queryDescribeInsightRulesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
