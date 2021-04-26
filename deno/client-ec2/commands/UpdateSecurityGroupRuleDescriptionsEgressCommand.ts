import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client.ts";
import {
  UpdateSecurityGroupRuleDescriptionsEgressRequest,
  UpdateSecurityGroupRuleDescriptionsEgressResult,
} from "../models/models_5.ts";
import {
  deserializeAws_ec2UpdateSecurityGroupRuleDescriptionsEgressCommand,
  serializeAws_ec2UpdateSecurityGroupRuleDescriptionsEgressCommand,
} from "../protocols/Aws_ec2.ts";
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

export interface UpdateSecurityGroupRuleDescriptionsEgressCommandInput
  extends UpdateSecurityGroupRuleDescriptionsEgressRequest {}
export interface UpdateSecurityGroupRuleDescriptionsEgressCommandOutput
  extends UpdateSecurityGroupRuleDescriptionsEgressResult,
    __MetadataBearer {}

/**
 * <p>[VPC only] Updates the description of an egress (outbound) security group rule. You
 * 			can replace an existing description, or add a description to a rule that did not have one
 * 			previously.</p>
 * 		       <p>You specify the description as part of the IP permissions structure. You can remove a
 * 			description for a security group rule by omitting the description parameter in the
 * 			request.</p>
 */
export class UpdateSecurityGroupRuleDescriptionsEgressCommand extends $Command<
  UpdateSecurityGroupRuleDescriptionsEgressCommandInput,
  UpdateSecurityGroupRuleDescriptionsEgressCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateSecurityGroupRuleDescriptionsEgressCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    UpdateSecurityGroupRuleDescriptionsEgressCommandInput,
    UpdateSecurityGroupRuleDescriptionsEgressCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "UpdateSecurityGroupRuleDescriptionsEgressCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateSecurityGroupRuleDescriptionsEgressRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateSecurityGroupRuleDescriptionsEgressResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateSecurityGroupRuleDescriptionsEgressCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2UpdateSecurityGroupRuleDescriptionsEgressCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateSecurityGroupRuleDescriptionsEgressCommandOutput> {
    return deserializeAws_ec2UpdateSecurityGroupRuleDescriptionsEgressCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
