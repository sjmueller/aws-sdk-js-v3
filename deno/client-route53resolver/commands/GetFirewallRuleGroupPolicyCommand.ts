import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient.ts";
import { GetFirewallRuleGroupPolicyRequest, GetFirewallRuleGroupPolicyResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1GetFirewallRuleGroupPolicyCommand,
  serializeAws_json1_1GetFirewallRuleGroupPolicyCommand,
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

export type GetFirewallRuleGroupPolicyCommandInput = GetFirewallRuleGroupPolicyRequest;
export type GetFirewallRuleGroupPolicyCommandOutput = GetFirewallRuleGroupPolicyResponse & __MetadataBearer;

/**
 * <p>Returns the AWS Identity and Access Management (AWS IAM) policy for sharing the specified rule group. You can use the policy to share the rule group using AWS Resource Access Manager (RAM). </p>
 */
export class GetFirewallRuleGroupPolicyCommand extends $Command<
  GetFirewallRuleGroupPolicyCommandInput,
  GetFirewallRuleGroupPolicyCommandOutput,
  Route53ResolverClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetFirewallRuleGroupPolicyCommandInput) {
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
  ): Handler<GetFirewallRuleGroupPolicyCommandInput, GetFirewallRuleGroupPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53ResolverClient";
    const commandName = "GetFirewallRuleGroupPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetFirewallRuleGroupPolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetFirewallRuleGroupPolicyResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetFirewallRuleGroupPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetFirewallRuleGroupPolicyCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetFirewallRuleGroupPolicyCommandOutput> {
    return deserializeAws_json1_1GetFirewallRuleGroupPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
