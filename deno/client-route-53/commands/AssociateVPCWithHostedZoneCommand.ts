import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client.ts";
import { AssociateVPCWithHostedZoneRequest, AssociateVPCWithHostedZoneResponse } from "../models/models_0.ts";
import {
  deserializeAws_restXmlAssociateVPCWithHostedZoneCommand,
  serializeAws_restXmlAssociateVPCWithHostedZoneCommand,
} from "../protocols/Aws_restXml.ts";
import { getIdNormalizerPlugin } from "../../middleware-sdk-route53/mod.ts";
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

export interface AssociateVPCWithHostedZoneCommandInput extends AssociateVPCWithHostedZoneRequest {}
export interface AssociateVPCWithHostedZoneCommandOutput extends AssociateVPCWithHostedZoneResponse, __MetadataBearer {}

/**
 * <p>Associates an Amazon VPC with a private hosted zone. </p>
 * 		       <important>
 *             <p>To perform the association, the VPC and the private hosted zone must already exist.
 * 			You can't convert a public hosted zone into a private hosted zone.</p>
 *          </important>
 * 		       <note>
 *             <p>If you want to associate a VPC that was created by using one AWS account with a private hosted zone that was created
 * 			by using a different account, the AWS account that created the private hosted zone must first submit a
 * 			<code>CreateVPCAssociationAuthorization</code> request. Then the account that created the VPC must submit an
 * 			<code>AssociateVPCWithHostedZone</code> request.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, AssociateVPCWithHostedZoneCommand } from "../../client-route-53/mod.ts";
 * // const { Route53Client, AssociateVPCWithHostedZoneCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new AssociateVPCWithHostedZoneCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateVPCWithHostedZoneCommandInput} for command's `input` shape.
 * @see {@link AssociateVPCWithHostedZoneCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class AssociateVPCWithHostedZoneCommand extends $Command<
  AssociateVPCWithHostedZoneCommandInput,
  AssociateVPCWithHostedZoneCommandOutput,
  Route53ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssociateVPCWithHostedZoneCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociateVPCWithHostedZoneCommandInput, AssociateVPCWithHostedZoneCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getIdNormalizerPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "AssociateVPCWithHostedZoneCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateVPCWithHostedZoneRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AssociateVPCWithHostedZoneResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssociateVPCWithHostedZoneCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlAssociateVPCWithHostedZoneCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateVPCWithHostedZoneCommandOutput> {
    return deserializeAws_restXmlAssociateVPCWithHostedZoneCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
