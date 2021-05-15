import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient.ts";
import { GetFederationTokenRequest, GetFederationTokenResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetFederationTokenCommand,
  serializeAws_restJson1GetFederationTokenCommand,
} from "../protocols/Aws_restJson1.ts";
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

export interface GetFederationTokenCommandInput extends GetFederationTokenRequest {}
export interface GetFederationTokenCommandOutput extends GetFederationTokenResponse, __MetadataBearer {}

/**
 * <p>Retrieves a token for federation.</p>
 *          <note>
 *             <p>This API doesn't support root users. If you try to invoke GetFederationToken with root
 *     credentials, an error message similar to the following one appears: </p>
 *             <p>
 *                <code>Provided identity: Principal: .... User: .... cannot be used for federation with
 *      Amazon Connect</code>
 *             </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, GetFederationTokenCommand } from "../../client-connect/mod.ts";
 * // const { ConnectClient, GetFederationTokenCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new GetFederationTokenCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetFederationTokenCommandInput} for command's `input` shape.
 * @see {@link GetFederationTokenCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetFederationTokenCommand extends $Command<
  GetFederationTokenCommandInput,
  GetFederationTokenCommandOutput,
  ConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetFederationTokenCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetFederationTokenCommandInput, GetFederationTokenCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "GetFederationTokenCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetFederationTokenRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetFederationTokenResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetFederationTokenCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetFederationTokenCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetFederationTokenCommandOutput> {
    return deserializeAws_restJson1GetFederationTokenCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
