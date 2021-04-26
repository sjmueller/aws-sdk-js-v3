import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient.ts";
import { UpdateDimensionRequest, UpdateDimensionResponse } from "../models/models_2.ts";
import {
  deserializeAws_restJson1UpdateDimensionCommand,
  serializeAws_restJson1UpdateDimensionCommand,
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

export interface UpdateDimensionCommandInput extends UpdateDimensionRequest {}
export interface UpdateDimensionCommandOutput extends UpdateDimensionResponse, __MetadataBearer {}

/**
 * <p>Updates the definition for a dimension. You
 *       cannot
 *       change the type of a dimension after
 *       it is created (you can delete it and
 *       recreate
 *       it).</p>
 */
export class UpdateDimensionCommand extends $Command<
  UpdateDimensionCommandInput,
  UpdateDimensionCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateDimensionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateDimensionCommandInput, UpdateDimensionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "UpdateDimensionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateDimensionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateDimensionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateDimensionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateDimensionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateDimensionCommandOutput> {
    return deserializeAws_restJson1UpdateDimensionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
