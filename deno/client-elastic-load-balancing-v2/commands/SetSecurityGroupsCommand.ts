import {
  ElasticLoadBalancingV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingV2Client.ts";
import { SetSecurityGroupsInput, SetSecurityGroupsOutput } from "../models/models_0.ts";
import {
  deserializeAws_querySetSecurityGroupsCommand,
  serializeAws_querySetSecurityGroupsCommand,
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

export interface SetSecurityGroupsCommandInput extends SetSecurityGroupsInput {}
export interface SetSecurityGroupsCommandOutput extends SetSecurityGroupsOutput, __MetadataBearer {}

/**
 * <p>Associates the specified security groups with the specified Application Load Balancer. The
 *       specified security groups override the previously associated security groups.</p>
 *          <p>You can't specify a security group for a Network Load Balancer or Gateway Load
 *       Balancer.</p>
 */
export class SetSecurityGroupsCommand extends $Command<
  SetSecurityGroupsCommandInput,
  SetSecurityGroupsCommandOutput,
  ElasticLoadBalancingV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SetSecurityGroupsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticLoadBalancingV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SetSecurityGroupsCommandInput, SetSecurityGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingV2Client";
    const commandName = "SetSecurityGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SetSecurityGroupsInput.filterSensitiveLog,
      outputFilterSensitiveLog: SetSecurityGroupsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SetSecurityGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_querySetSecurityGroupsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SetSecurityGroupsCommandOutput> {
    return deserializeAws_querySetSecurityGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
