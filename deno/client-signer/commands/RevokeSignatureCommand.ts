import { ServiceInputTypes, ServiceOutputTypes, SignerClientResolvedConfig } from "../SignerClient.ts";
import { RevokeSignatureRequest } from "../models/models_0.ts";
import {
  deserializeAws_restJson1RevokeSignatureCommand,
  serializeAws_restJson1RevokeSignatureCommand,
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

export interface RevokeSignatureCommandInput extends RevokeSignatureRequest {}
export interface RevokeSignatureCommandOutput extends __MetadataBearer {}

/**
 * <p>Changes the state of a signing job to REVOKED. This indicates that the signature is no
 * 			longer valid.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SignerClient, RevokeSignatureCommand } from "../../client-signer/mod.ts";
 * // const { SignerClient, RevokeSignatureCommand } = require("@aws-sdk/client-signer"); // CommonJS import
 * const client = new SignerClient(config);
 * const command = new RevokeSignatureCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RevokeSignatureCommandInput} for command's `input` shape.
 * @see {@link RevokeSignatureCommandOutput} for command's `response` shape.
 * @see {@link SignerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class RevokeSignatureCommand extends $Command<
  RevokeSignatureCommandInput,
  RevokeSignatureCommandOutput,
  SignerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RevokeSignatureCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SignerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RevokeSignatureCommandInput, RevokeSignatureCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SignerClient";
    const commandName = "RevokeSignatureCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RevokeSignatureRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RevokeSignatureCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1RevokeSignatureCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RevokeSignatureCommandOutput> {
    return deserializeAws_restJson1RevokeSignatureCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
