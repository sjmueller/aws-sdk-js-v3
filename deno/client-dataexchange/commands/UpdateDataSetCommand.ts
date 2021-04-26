import { DataExchangeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataExchangeClient.ts";
import { UpdateDataSetRequest, UpdateDataSetResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1UpdateDataSetCommand,
  serializeAws_restJson1UpdateDataSetCommand,
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

export interface UpdateDataSetCommandInput extends UpdateDataSetRequest {}
export interface UpdateDataSetCommandOutput extends UpdateDataSetResponse, __MetadataBearer {}

/**
 * <p>This operation updates a data set.</p>
 */
export class UpdateDataSetCommand extends $Command<
  UpdateDataSetCommandInput,
  UpdateDataSetCommandOutput,
  DataExchangeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateDataSetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataExchangeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateDataSetCommandInput, UpdateDataSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataExchangeClient";
    const commandName = "UpdateDataSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateDataSetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateDataSetResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateDataSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateDataSetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateDataSetCommandOutput> {
    return deserializeAws_restJson1UpdateDataSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
