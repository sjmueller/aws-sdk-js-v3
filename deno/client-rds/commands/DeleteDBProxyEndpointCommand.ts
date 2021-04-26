import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient.ts";
import { DeleteDBProxyEndpointRequest, DeleteDBProxyEndpointResponse } from "../models/models_0.ts";
import {
  deserializeAws_queryDeleteDBProxyEndpointCommand,
  serializeAws_queryDeleteDBProxyEndpointCommand,
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

export interface DeleteDBProxyEndpointCommandInput extends DeleteDBProxyEndpointRequest {}
export interface DeleteDBProxyEndpointCommandOutput extends DeleteDBProxyEndpointResponse, __MetadataBearer {}

/**
 * <p>Deletes a <code>DBProxyEndpoint</code>. Doing so removes the ability to access the DB proxy using the
 *         endpoint that you defined. The endpoint that you delete might have provided capabilities such as read/write
 *         or read-only operations, or using a different VPC than the DB proxy's default VPC.</p>
 */
export class DeleteDBProxyEndpointCommand extends $Command<
  DeleteDBProxyEndpointCommandInput,
  DeleteDBProxyEndpointCommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteDBProxyEndpointCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteDBProxyEndpointCommandInput, DeleteDBProxyEndpointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "DeleteDBProxyEndpointCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteDBProxyEndpointRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteDBProxyEndpointResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteDBProxyEndpointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteDBProxyEndpointCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteDBProxyEndpointCommandOutput> {
    return deserializeAws_queryDeleteDBProxyEndpointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
