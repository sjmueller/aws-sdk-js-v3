import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient.ts";
import { ListFirewallRulesRequest, ListFirewallRulesResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListFirewallRulesCommand,
  serializeAws_json1_1ListFirewallRulesCommand,
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

export interface ListFirewallRulesCommandInput extends ListFirewallRulesRequest {}
export interface ListFirewallRulesCommandOutput extends ListFirewallRulesResponse, __MetadataBearer {}

/**
 * <p>Retrieves the firewall rules that you have defined for the specified firewall rule group. DNS Firewall uses the rules in a rule group to filter DNS network traffic for a VPC. </p>
 *          <p>A single call might return only a partial list of the rules. For information, see <code>MaxResults</code>. </p>
 */
export class ListFirewallRulesCommand extends $Command<
  ListFirewallRulesCommandInput,
  ListFirewallRulesCommandOutput,
  Route53ResolverClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListFirewallRulesCommandInput) {
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
  ): Handler<ListFirewallRulesCommandInput, ListFirewallRulesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53ResolverClient";
    const commandName = "ListFirewallRulesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListFirewallRulesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListFirewallRulesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListFirewallRulesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListFirewallRulesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListFirewallRulesCommandOutput> {
    return deserializeAws_json1_1ListFirewallRulesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
