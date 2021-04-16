import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client.ts";
import { UpdateBotLocaleRequest, UpdateBotLocaleResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1UpdateBotLocaleCommand,
  serializeAws_restJson1UpdateBotLocaleCommand,
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

export type UpdateBotLocaleCommandInput = UpdateBotLocaleRequest;
export type UpdateBotLocaleCommandOutput = UpdateBotLocaleResponse & __MetadataBearer;

/**
 * <p>Updates the settings that a bot has for a specific locale.</p>
 */
export class UpdateBotLocaleCommand extends $Command<
  UpdateBotLocaleCommandInput,
  UpdateBotLocaleCommandOutput,
  LexModelsV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateBotLocaleCommandInput) {
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
  ): Handler<UpdateBotLocaleCommandInput, UpdateBotLocaleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelsV2Client";
    const commandName = "UpdateBotLocaleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateBotLocaleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateBotLocaleResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateBotLocaleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateBotLocaleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateBotLocaleCommandOutput> {
    return deserializeAws_restJson1UpdateBotLocaleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
