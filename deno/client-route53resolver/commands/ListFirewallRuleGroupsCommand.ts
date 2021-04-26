import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient.ts";
import { ListFirewallRuleGroupsRequest, ListFirewallRuleGroupsResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListFirewallRuleGroupsCommand,
  serializeAws_json1_1ListFirewallRuleGroupsCommand,
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

export interface ListFirewallRuleGroupsCommandInput extends ListFirewallRuleGroupsRequest {}
export interface ListFirewallRuleGroupsCommandOutput extends ListFirewallRuleGroupsResponse, __MetadataBearer {}

/**
 * <p>Retrieves the minimal high-level information for the rule groups that you have defined.  </p>
 *          <p>A single call might return only a partial list of the rule groups. For information, see <code>MaxResults</code>. </p>
 */
export class ListFirewallRuleGroupsCommand extends $Command<
  ListFirewallRuleGroupsCommandInput,
  ListFirewallRuleGroupsCommandOutput,
  Route53ResolverClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListFirewallRuleGroupsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ResolverClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListFirewallRuleGroupsCommandInput, ListFirewallRuleGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53ResolverClient";
    const commandName = "ListFirewallRuleGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListFirewallRuleGroupsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListFirewallRuleGroupsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListFirewallRuleGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListFirewallRuleGroupsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListFirewallRuleGroupsCommandOutput> {
    return deserializeAws_json1_1ListFirewallRuleGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
