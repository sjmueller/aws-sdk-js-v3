import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient.ts";
import { DeleteEndpointAccessMessage, EndpointAccess } from "../models/models_0.ts";
import {
  deserializeAws_queryDeleteEndpointAccessCommand,
  serializeAws_queryDeleteEndpointAccessCommand,
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

export interface DeleteEndpointAccessCommandInput extends DeleteEndpointAccessMessage {}
export interface DeleteEndpointAccessCommandOutput extends EndpointAccess, __MetadataBearer {}

/**
 * <p>Deletes a Redshift-managed VPC endpoint.</p>
 */
export class DeleteEndpointAccessCommand extends $Command<
  DeleteEndpointAccessCommandInput,
  DeleteEndpointAccessCommandOutput,
  RedshiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteEndpointAccessCommandInput) {
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
  ): Handler<DeleteEndpointAccessCommandInput, DeleteEndpointAccessCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "DeleteEndpointAccessCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteEndpointAccessMessage.filterSensitiveLog,
      outputFilterSensitiveLog: EndpointAccess.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteEndpointAccessCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteEndpointAccessCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteEndpointAccessCommandOutput> {
    return deserializeAws_queryDeleteEndpointAccessCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
