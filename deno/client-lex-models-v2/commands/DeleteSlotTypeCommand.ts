import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client.ts";
import { DeleteSlotTypeRequest } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DeleteSlotTypeCommand,
  serializeAws_restJson1DeleteSlotTypeCommand,
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

export interface DeleteSlotTypeCommandInput extends DeleteSlotTypeRequest {}
export interface DeleteSlotTypeCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a slot type from a bot locale.</p>
 *          <p>If a slot is using the slot type, Amazon Lex throws a
 *             <code>ResourceInUseException</code> exception. To avoid the
 *          exception, set the <code>skipResourceInUseCheck</code> parameter to
 *             <code>true</code>.</p>
 */
export class DeleteSlotTypeCommand extends $Command<
  DeleteSlotTypeCommandInput,
  DeleteSlotTypeCommandOutput,
  LexModelsV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteSlotTypeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LexModelsV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteSlotTypeCommandInput, DeleteSlotTypeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelsV2Client";
    const commandName = "DeleteSlotTypeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteSlotTypeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteSlotTypeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteSlotTypeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteSlotTypeCommandOutput> {
    return deserializeAws_restJson1DeleteSlotTypeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
