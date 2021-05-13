import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient.ts";
import { RevokeDBSecurityGroupIngressMessage, RevokeDBSecurityGroupIngressResult } from "../models/models_1.ts";
import {
  deserializeAws_queryRevokeDBSecurityGroupIngressCommand,
  serializeAws_queryRevokeDBSecurityGroupIngressCommand,
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

export interface RevokeDBSecurityGroupIngressCommandInput extends RevokeDBSecurityGroupIngressMessage {}
export interface RevokeDBSecurityGroupIngressCommandOutput
  extends RevokeDBSecurityGroupIngressResult,
    __MetadataBearer {}

/**
 * <p>Revokes ingress from a DBSecurityGroup for previously authorized IP ranges or EC2 or VPC security groups. Required parameters for this API are one of CIDRIP, EC2SecurityGroupId for VPC, or (EC2SecurityGroupOwnerId and either EC2SecurityGroupName or EC2SecurityGroupId).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, RevokeDBSecurityGroupIngressCommand } from "../../client-rds/mod.ts";
 * // const { RDSClient, RevokeDBSecurityGroupIngressCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new RevokeDBSecurityGroupIngressCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RevokeDBSecurityGroupIngressCommandInput} for command's `input` shape.
 * @see {@link RevokeDBSecurityGroupIngressCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class RevokeDBSecurityGroupIngressCommand extends $Command<
  RevokeDBSecurityGroupIngressCommandInput,
  RevokeDBSecurityGroupIngressCommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RevokeDBSecurityGroupIngressCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RevokeDBSecurityGroupIngressCommandInput, RevokeDBSecurityGroupIngressCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "RevokeDBSecurityGroupIngressCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RevokeDBSecurityGroupIngressMessage.filterSensitiveLog,
      outputFilterSensitiveLog: RevokeDBSecurityGroupIngressResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RevokeDBSecurityGroupIngressCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryRevokeDBSecurityGroupIngressCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RevokeDBSecurityGroupIngressCommandOutput> {
    return deserializeAws_queryRevokeDBSecurityGroupIngressCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
