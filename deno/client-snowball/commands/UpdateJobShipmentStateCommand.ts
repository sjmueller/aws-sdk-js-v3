import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient.ts";
import { UpdateJobShipmentStateRequest, UpdateJobShipmentStateResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1UpdateJobShipmentStateCommand,
  serializeAws_json1_1UpdateJobShipmentStateCommand,
} from "../protocols/Aws_json1_1.ts";
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

export interface UpdateJobShipmentStateCommandInput extends UpdateJobShipmentStateRequest {}
export interface UpdateJobShipmentStateCommandOutput extends UpdateJobShipmentStateResult, __MetadataBearer {}

/**
 * <p>Updates the state when a the shipment states changes to a different state.</p>
 */
export class UpdateJobShipmentStateCommand extends $Command<
  UpdateJobShipmentStateCommandInput,
  UpdateJobShipmentStateCommandOutput,
  SnowballClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateJobShipmentStateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SnowballClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateJobShipmentStateCommandInput, UpdateJobShipmentStateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SnowballClient";
    const commandName = "UpdateJobShipmentStateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateJobShipmentStateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateJobShipmentStateResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateJobShipmentStateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateJobShipmentStateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateJobShipmentStateCommandOutput> {
    return deserializeAws_json1_1UpdateJobShipmentStateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
