import { PollyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PollyClient.ts";
import { DeleteLexiconInput, DeleteLexiconOutput } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DeleteLexiconCommand,
  serializeAws_restJson1DeleteLexiconCommand,
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

export interface DeleteLexiconCommandInput extends DeleteLexiconInput {}
export interface DeleteLexiconCommandOutput extends DeleteLexiconOutput, __MetadataBearer {}

/**
 * <p>Deletes the specified pronunciation lexicon stored in an AWS Region. A lexicon which
 *       has been deleted is not available for speech synthesis, nor is it possible to retrieve it
 *       using either the <code>GetLexicon</code> or <code>ListLexicon</code> APIs.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html">Managing
 *         Lexicons</a>.</p>
 */
export class DeleteLexiconCommand extends $Command<
  DeleteLexiconCommandInput,
  DeleteLexiconCommandOutput,
  PollyClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteLexiconCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PollyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteLexiconCommandInput, DeleteLexiconCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PollyClient";
    const commandName = "DeleteLexiconCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteLexiconInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteLexiconOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteLexiconCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteLexiconCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteLexiconCommandOutput> {
    return deserializeAws_restJson1DeleteLexiconCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
