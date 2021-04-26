import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient.ts";
import { EndpointAuthorization } from "../models/models_0.ts";
import { RevokeEndpointAccessMessage } from "../models/models_1.ts";
import {
  deserializeAws_queryRevokeEndpointAccessCommand,
  serializeAws_queryRevokeEndpointAccessCommand,
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

export interface RevokeEndpointAccessCommandInput extends RevokeEndpointAccessMessage {}
export interface RevokeEndpointAccessCommandOutput extends EndpointAuthorization, __MetadataBearer {}

/**
 * <p>Revokes access to a cluster.</p>
 */
export class RevokeEndpointAccessCommand extends $Command<
  RevokeEndpointAccessCommandInput,
  RevokeEndpointAccessCommandOutput,
  RedshiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RevokeEndpointAccessCommandInput) {
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
  ): Handler<RevokeEndpointAccessCommandInput, RevokeEndpointAccessCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "RevokeEndpointAccessCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RevokeEndpointAccessMessage.filterSensitiveLog,
      outputFilterSensitiveLog: EndpointAuthorization.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RevokeEndpointAccessCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryRevokeEndpointAccessCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RevokeEndpointAccessCommandOutput> {
    return deserializeAws_queryRevokeEndpointAccessCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
