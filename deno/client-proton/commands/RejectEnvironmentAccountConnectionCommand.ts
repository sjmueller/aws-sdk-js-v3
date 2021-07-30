import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient.ts";
import { RejectEnvironmentAccountConnectionInput, RejectEnvironmentAccountConnectionOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_0RejectEnvironmentAccountConnectionCommand,
  serializeAws_json1_0RejectEnvironmentAccountConnectionCommand,
} from "../protocols/Aws_json1_0.ts";
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

export interface RejectEnvironmentAccountConnectionCommandInput extends RejectEnvironmentAccountConnectionInput {}
export interface RejectEnvironmentAccountConnectionCommandOutput
  extends RejectEnvironmentAccountConnectionOutput,
    __MetadataBearer {}

/**
 * <p>In a management account, reject an environment account connection from another environment account.</p>
 *         <p>After you reject an environment account connection request, you <i>won’t</i> be able to accept or use the rejected
 *             environment account connection.</p>
 *         <p>You <i>can’t</i> reject an environment account connection that is connected to an environment.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/adminguide/ag-env-account-connections.html">Environment account connections</a>
 *             in the <i>AWS Proton Administrator guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, RejectEnvironmentAccountConnectionCommand } from "../../client-proton/mod.ts";
 * // const { ProtonClient, RejectEnvironmentAccountConnectionCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * const client = new ProtonClient(config);
 * const command = new RejectEnvironmentAccountConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RejectEnvironmentAccountConnectionCommandInput} for command's `input` shape.
 * @see {@link RejectEnvironmentAccountConnectionCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class RejectEnvironmentAccountConnectionCommand extends $Command<
  RejectEnvironmentAccountConnectionCommandInput,
  RejectEnvironmentAccountConnectionCommandOutput,
  ProtonClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RejectEnvironmentAccountConnectionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ProtonClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RejectEnvironmentAccountConnectionCommandInput, RejectEnvironmentAccountConnectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ProtonClient";
    const commandName = "RejectEnvironmentAccountConnectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RejectEnvironmentAccountConnectionInput.filterSensitiveLog,
      outputFilterSensitiveLog: RejectEnvironmentAccountConnectionOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: RejectEnvironmentAccountConnectionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_0RejectEnvironmentAccountConnectionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RejectEnvironmentAccountConnectionCommandOutput> {
    return deserializeAws_json1_0RejectEnvironmentAccountConnectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
