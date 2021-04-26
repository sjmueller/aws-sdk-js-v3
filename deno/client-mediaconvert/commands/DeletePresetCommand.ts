import { MediaConvertClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConvertClient.ts";
import { DeletePresetRequest, DeletePresetResponse } from "../models/models_1.ts";
import {
  deserializeAws_restJson1DeletePresetCommand,
  serializeAws_restJson1DeletePresetCommand,
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

export interface DeletePresetCommandInput extends DeletePresetRequest {}
export interface DeletePresetCommandOutput extends DeletePresetResponse, __MetadataBearer {}

/**
 * Permanently delete a preset you have created.
 */
export class DeletePresetCommand extends $Command<
  DeletePresetCommandInput,
  DeletePresetCommandOutput,
  MediaConvertClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeletePresetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaConvertClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeletePresetCommandInput, DeletePresetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaConvertClient";
    const commandName = "DeletePresetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeletePresetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeletePresetResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeletePresetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeletePresetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeletePresetCommandOutput> {
    return deserializeAws_restJson1DeletePresetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
