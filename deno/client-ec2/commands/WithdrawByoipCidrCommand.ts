import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client.ts";
import { WithdrawByoipCidrRequest, WithdrawByoipCidrResult } from "../models/models_5.ts";
import {
  deserializeAws_ec2WithdrawByoipCidrCommand,
  serializeAws_ec2WithdrawByoipCidrCommand,
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

export interface WithdrawByoipCidrCommandInput extends WithdrawByoipCidrRequest {}
export interface WithdrawByoipCidrCommandOutput extends WithdrawByoipCidrResult, __MetadataBearer {}

/**
 * <p>Stops advertising an address range that is provisioned as an address pool.</p>
 *          <p>You can perform this operation at most once every 10 seconds, even if you specify different
 *          address ranges each time.</p>
 *          <p>It can take a few minutes before traffic to the specified addresses stops routing to Amazon Web Services
 *           because of BGP propagation delays.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, WithdrawByoipCidrCommand } from "../../client-ec2/mod.ts";
 * // const { EC2Client, WithdrawByoipCidrCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new WithdrawByoipCidrCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link WithdrawByoipCidrCommandInput} for command's `input` shape.
 * @see {@link WithdrawByoipCidrCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class WithdrawByoipCidrCommand extends $Command<
  WithdrawByoipCidrCommandInput,
  WithdrawByoipCidrCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: WithdrawByoipCidrCommandInput) {
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
  ): Handler<WithdrawByoipCidrCommandInput, WithdrawByoipCidrCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "WithdrawByoipCidrCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: WithdrawByoipCidrRequest.filterSensitiveLog,
      outputFilterSensitiveLog: WithdrawByoipCidrResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: WithdrawByoipCidrCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2WithdrawByoipCidrCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<WithdrawByoipCidrCommandOutput> {
    return deserializeAws_ec2WithdrawByoipCidrCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
