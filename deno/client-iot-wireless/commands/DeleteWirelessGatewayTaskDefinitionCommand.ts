import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient.ts";
import {
  DeleteWirelessGatewayTaskDefinitionRequest,
  DeleteWirelessGatewayTaskDefinitionResponse,
} from "../models/models_0.ts";
import {
  deserializeAws_restJson1DeleteWirelessGatewayTaskDefinitionCommand,
  serializeAws_restJson1DeleteWirelessGatewayTaskDefinitionCommand,
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

export type DeleteWirelessGatewayTaskDefinitionCommandInput = DeleteWirelessGatewayTaskDefinitionRequest;
export type DeleteWirelessGatewayTaskDefinitionCommandOutput = DeleteWirelessGatewayTaskDefinitionResponse &
  __MetadataBearer;

/**
 * <p>Deletes a wireless gateway task definition. Deleting this task definition does not affect tasks that are currently in progress.</p>
 */
export class DeleteWirelessGatewayTaskDefinitionCommand extends $Command<
  DeleteWirelessGatewayTaskDefinitionCommandInput,
  DeleteWirelessGatewayTaskDefinitionCommandOutput,
  IoTWirelessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteWirelessGatewayTaskDefinitionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTWirelessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteWirelessGatewayTaskDefinitionCommandInput, DeleteWirelessGatewayTaskDefinitionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "DeleteWirelessGatewayTaskDefinitionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteWirelessGatewayTaskDefinitionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteWirelessGatewayTaskDefinitionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteWirelessGatewayTaskDefinitionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteWirelessGatewayTaskDefinitionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteWirelessGatewayTaskDefinitionCommandOutput> {
    return deserializeAws_restJson1DeleteWirelessGatewayTaskDefinitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
