import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient.ts";
import { AuthorizeEndpointAccessMessage, EndpointAuthorization } from "../models/models_0.ts";
import {
  deserializeAws_queryAuthorizeEndpointAccessCommand,
  serializeAws_queryAuthorizeEndpointAccessCommand,
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

export interface AuthorizeEndpointAccessCommandInput extends AuthorizeEndpointAccessMessage {}
export interface AuthorizeEndpointAccessCommandOutput extends EndpointAuthorization, __MetadataBearer {}

/**
 * <p>Grants access to a cluster.</p>
 */
export class AuthorizeEndpointAccessCommand extends $Command<
  AuthorizeEndpointAccessCommandInput,
  AuthorizeEndpointAccessCommandOutput,
  RedshiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AuthorizeEndpointAccessCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AuthorizeEndpointAccessCommandInput, AuthorizeEndpointAccessCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "AuthorizeEndpointAccessCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AuthorizeEndpointAccessMessage.filterSensitiveLog,
      outputFilterSensitiveLog: EndpointAuthorization.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AuthorizeEndpointAccessCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryAuthorizeEndpointAccessCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AuthorizeEndpointAccessCommandOutput> {
    return deserializeAws_queryAuthorizeEndpointAccessCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
