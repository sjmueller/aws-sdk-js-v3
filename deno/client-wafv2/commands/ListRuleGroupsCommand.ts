import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client.ts";
import { ListRuleGroupsRequest, ListRuleGroupsResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListRuleGroupsCommand,
  serializeAws_json1_1ListRuleGroupsCommand,
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

export interface ListRuleGroupsCommandInput extends ListRuleGroupsRequest {}
export interface ListRuleGroupsCommandOutput extends ListRuleGroupsResponse, __MetadataBearer {}

/**
 * <p>Retrieves an array of <a>RuleGroupSummary</a> objects for the rule groups that you manage. </p>
 */
export class ListRuleGroupsCommand extends $Command<
  ListRuleGroupsCommandInput,
  ListRuleGroupsCommandOutput,
  WAFV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListRuleGroupsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WAFV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListRuleGroupsCommandInput, ListRuleGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFV2Client";
    const commandName = "ListRuleGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListRuleGroupsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListRuleGroupsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListRuleGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListRuleGroupsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListRuleGroupsCommandOutput> {
    return deserializeAws_json1_1ListRuleGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
