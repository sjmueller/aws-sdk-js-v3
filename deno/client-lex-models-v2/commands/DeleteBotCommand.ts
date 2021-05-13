import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client.ts";
import { DeleteBotRequest, DeleteBotResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DeleteBotCommand,
  serializeAws_restJson1DeleteBotCommand,
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

export interface DeleteBotCommandInput extends DeleteBotRequest {}
export interface DeleteBotCommandOutput extends DeleteBotResponse, __MetadataBearer {}

/**
 * <p>Deletes all versions of a bot, including the <code>Draft</code>
 *          version. To delete a specific version, use the
 *             <code>DeleteBotVersion</code> operation.</p>
 *          <p>When you delete a bot, all of the resources contained in the bot are
 *          also deleted. Deleting a bot removes all locales, intents, slot, and
 *          slot types defined for the bot.</p>
 *          <p>If a bot has an alias, the <code>DeleteBot</code> operation returns
 *          a <code>ResourceInUseException</code> exception. If you want to delete
 *          the bot and the alias, set the <code>skipResourceInUseCheck</code>
 *          parameter to <code>true</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, DeleteBotCommand } from "../../client-lex-models-v2/mod.ts";
 * // const { LexModelsV2Client, DeleteBotCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new DeleteBotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteBotCommandInput} for command's `input` shape.
 * @see {@link DeleteBotCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteBotCommand extends $Command<
  DeleteBotCommandInput,
  DeleteBotCommandOutput,
  LexModelsV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteBotCommandInput) {
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
  ): Handler<DeleteBotCommandInput, DeleteBotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelsV2Client";
    const commandName = "DeleteBotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteBotRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteBotResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteBotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteBotCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteBotCommandOutput> {
    return deserializeAws_restJson1DeleteBotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
