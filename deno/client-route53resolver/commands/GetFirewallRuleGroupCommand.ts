import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient.ts";
import { GetFirewallRuleGroupRequest, GetFirewallRuleGroupResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1GetFirewallRuleGroupCommand,
  serializeAws_json1_1GetFirewallRuleGroupCommand,
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

export interface GetFirewallRuleGroupCommandInput extends GetFirewallRuleGroupRequest {}
export interface GetFirewallRuleGroupCommandOutput extends GetFirewallRuleGroupResponse, __MetadataBearer {}

/**
 * <p>Retrieves the specified firewall rule group. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, GetFirewallRuleGroupCommand } from "../../client-route53resolver/mod.ts";
 * // const { Route53ResolverClient, GetFirewallRuleGroupCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new GetFirewallRuleGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetFirewallRuleGroupCommandInput} for command's `input` shape.
 * @see {@link GetFirewallRuleGroupCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetFirewallRuleGroupCommand extends $Command<
  GetFirewallRuleGroupCommandInput,
  GetFirewallRuleGroupCommandOutput,
  Route53ResolverClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetFirewallRuleGroupCommandInput) {
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
  ): Handler<GetFirewallRuleGroupCommandInput, GetFirewallRuleGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53ResolverClient";
    const commandName = "GetFirewallRuleGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetFirewallRuleGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetFirewallRuleGroupResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetFirewallRuleGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetFirewallRuleGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetFirewallRuleGroupCommandOutput> {
    return deserializeAws_json1_1GetFirewallRuleGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
