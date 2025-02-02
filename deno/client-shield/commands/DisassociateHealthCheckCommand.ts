import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient.ts";
import { DisassociateHealthCheckRequest, DisassociateHealthCheckResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DisassociateHealthCheckCommand,
  serializeAws_json1_1DisassociateHealthCheckCommand,
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

export interface DisassociateHealthCheckCommandInput extends DisassociateHealthCheckRequest {}
export interface DisassociateHealthCheckCommandOutput extends DisassociateHealthCheckResponse, __MetadataBearer {}

/**
 * <p>Removes health-based detection from the Shield Advanced protection for a resource. Shield Advanced health-based detection uses the health of your Amazon Web Services resource to improve responsiveness and accuracy in attack detection and mitigation. </p>
 *          <p>You define the health check in Route 53 and then associate or disassociate it with your Shield Advanced protection. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/ddos-overview.html#ddos-advanced-health-check-option">Shield Advanced Health-Based Detection</a> in the <i>WAF Developer Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, DisassociateHealthCheckCommand } from "../../client-shield/mod.ts";
 * // const { ShieldClient, DisassociateHealthCheckCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * const client = new ShieldClient(config);
 * const command = new DisassociateHealthCheckCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateHealthCheckCommandInput} for command's `input` shape.
 * @see {@link DisassociateHealthCheckCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DisassociateHealthCheckCommand extends $Command<
  DisassociateHealthCheckCommandInput,
  DisassociateHealthCheckCommandOutput,
  ShieldClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociateHealthCheckCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ShieldClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisassociateHealthCheckCommandInput, DisassociateHealthCheckCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ShieldClient";
    const commandName = "DisassociateHealthCheckCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateHealthCheckRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisassociateHealthCheckResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisassociateHealthCheckCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DisassociateHealthCheckCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisassociateHealthCheckCommandOutput> {
    return deserializeAws_json1_1DisassociateHealthCheckCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
