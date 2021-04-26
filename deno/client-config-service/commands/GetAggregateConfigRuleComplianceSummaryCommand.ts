import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient.ts";
import {
  GetAggregateConfigRuleComplianceSummaryRequest,
  GetAggregateConfigRuleComplianceSummaryResponse,
} from "../models/models_0.ts";
import {
  deserializeAws_json1_1GetAggregateConfigRuleComplianceSummaryCommand,
  serializeAws_json1_1GetAggregateConfigRuleComplianceSummaryCommand,
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

export interface GetAggregateConfigRuleComplianceSummaryCommandInput
  extends GetAggregateConfigRuleComplianceSummaryRequest {}
export interface GetAggregateConfigRuleComplianceSummaryCommandOutput
  extends GetAggregateConfigRuleComplianceSummaryResponse,
    __MetadataBearer {}

/**
 * <p>Returns the number of compliant and noncompliant rules for one
 * 			or more accounts and regions in an aggregator.</p>
 * 		       <note>
 * 			         <p>The results can return an empty result page, but if you
 * 				have a nextToken, the results are displayed on the next
 * 				page.</p>
 * 		       </note>
 */
export class GetAggregateConfigRuleComplianceSummaryCommand extends $Command<
  GetAggregateConfigRuleComplianceSummaryCommandInput,
  GetAggregateConfigRuleComplianceSummaryCommandOutput,
  ConfigServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetAggregateConfigRuleComplianceSummaryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConfigServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetAggregateConfigRuleComplianceSummaryCommandInput,
    GetAggregateConfigRuleComplianceSummaryCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "GetAggregateConfigRuleComplianceSummaryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetAggregateConfigRuleComplianceSummaryRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetAggregateConfigRuleComplianceSummaryResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetAggregateConfigRuleComplianceSummaryCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GetAggregateConfigRuleComplianceSummaryCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetAggregateConfigRuleComplianceSummaryCommandOutput> {
    return deserializeAws_json1_1GetAggregateConfigRuleComplianceSummaryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
