import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient.ts";
import { RemoveClientIDFromOpenIDConnectProviderRequest } from "../models/models_0.ts";
import {
  deserializeAws_queryRemoveClientIDFromOpenIDConnectProviderCommand,
  serializeAws_queryRemoveClientIDFromOpenIDConnectProviderCommand,
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

export type RemoveClientIDFromOpenIDConnectProviderCommandInput = RemoveClientIDFromOpenIDConnectProviderRequest;
export type RemoveClientIDFromOpenIDConnectProviderCommandOutput = __MetadataBearer;

/**
 * <p>Removes the specified client ID (also known as audience) from the list of client IDs
 *          registered for the specified IAM OpenID Connect (OIDC) provider resource object.</p>
 *          <p>This operation is idempotent; it does not fail or return an error if you try to remove a
 *          client ID that does not exist.</p>
 */
export class RemoveClientIDFromOpenIDConnectProviderCommand extends $Command<
  RemoveClientIDFromOpenIDConnectProviderCommandInput,
  RemoveClientIDFromOpenIDConnectProviderCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RemoveClientIDFromOpenIDConnectProviderCommandInput) {
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
  ): Handler<
    RemoveClientIDFromOpenIDConnectProviderCommandInput,
    RemoveClientIDFromOpenIDConnectProviderCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "RemoveClientIDFromOpenIDConnectProviderCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RemoveClientIDFromOpenIDConnectProviderRequest.filterSensitiveLog,
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
    input: RemoveClientIDFromOpenIDConnectProviderCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryRemoveClientIDFromOpenIDConnectProviderCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RemoveClientIDFromOpenIDConnectProviderCommandOutput> {
    return deserializeAws_queryRemoveClientIDFromOpenIDConnectProviderCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
