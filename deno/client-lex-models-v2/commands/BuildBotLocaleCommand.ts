import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client.ts";
import { BuildBotLocaleRequest, BuildBotLocaleResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1BuildBotLocaleCommand,
  serializeAws_restJson1BuildBotLocaleCommand,
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

export interface BuildBotLocaleCommandInput extends BuildBotLocaleRequest {}
export interface BuildBotLocaleCommandOutput extends BuildBotLocaleResponse, __MetadataBearer {}

/**
 * <p>Builds a bot, its intents, and its slot types into a specific
 *          locale. A bot can be built into multiple locales. At runtime the locale
 *          is used to choose a specific build of the bot.</p>
 */
export class BuildBotLocaleCommand extends $Command<
  BuildBotLocaleCommandInput,
  BuildBotLocaleCommandOutput,
  LexModelsV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BuildBotLocaleCommandInput) {
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
  ): Handler<BuildBotLocaleCommandInput, BuildBotLocaleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelsV2Client";
    const commandName = "BuildBotLocaleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BuildBotLocaleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BuildBotLocaleResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BuildBotLocaleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1BuildBotLocaleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BuildBotLocaleCommandOutput> {
    return deserializeAws_restJson1BuildBotLocaleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
