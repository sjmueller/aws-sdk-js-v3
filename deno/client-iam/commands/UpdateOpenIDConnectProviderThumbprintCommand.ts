import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient.ts";
import { UpdateOpenIDConnectProviderThumbprintRequest } from "../models/models_0.ts";
import {
  deserializeAws_queryUpdateOpenIDConnectProviderThumbprintCommand,
  serializeAws_queryUpdateOpenIDConnectProviderThumbprintCommand,
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

export type UpdateOpenIDConnectProviderThumbprintCommandInput = UpdateOpenIDConnectProviderThumbprintRequest;
export type UpdateOpenIDConnectProviderThumbprintCommandOutput = __MetadataBearer;

/**
 * <p>Replaces the existing list of server certificate thumbprints associated with an OpenID
 *          Connect (OIDC) provider resource object with a new list of thumbprints.</p>
 *          <p>The list that you pass with this operation completely replaces the existing list of
 *          thumbprints. (The lists are not merged.)</p>
 *          <p>Typically, you need to update a thumbprint only when the identity provider's certificate
 *          changes, which occurs rarely. However, if the provider's certificate
 *             <i>does</i> change, any attempt to assume an IAM role that specifies the
 *          OIDC provider as a principal fails until the certificate thumbprint is updated.</p>
 *          <note>
 *             <p>Trust for the OIDC provider is derived from the provider's certificate and is
 *             validated by the thumbprint. Therefore, it is best to limit access to the
 *                <code>UpdateOpenIDConnectProviderThumbprint</code> operation to highly privileged
 *             users.</p>
 *          </note>
 */
export class UpdateOpenIDConnectProviderThumbprintCommand extends $Command<
  UpdateOpenIDConnectProviderThumbprintCommandInput,
  UpdateOpenIDConnectProviderThumbprintCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateOpenIDConnectProviderThumbprintCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateOpenIDConnectProviderThumbprintCommandInput, UpdateOpenIDConnectProviderThumbprintCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "UpdateOpenIDConnectProviderThumbprintCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateOpenIDConnectProviderThumbprintRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateOpenIDConnectProviderThumbprintCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryUpdateOpenIDConnectProviderThumbprintCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateOpenIDConnectProviderThumbprintCommandOutput> {
    return deserializeAws_queryUpdateOpenIDConnectProviderThumbprintCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
