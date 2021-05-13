import {
  LexModelBuildingServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LexModelBuildingServiceClient.ts";
import { DeleteUtterancesRequest } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DeleteUtterancesCommand,
  serializeAws_restJson1DeleteUtterancesCommand,
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

export interface DeleteUtterancesCommandInput extends DeleteUtterancesRequest {}
export interface DeleteUtterancesCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes stored utterances.</p>
 *          <p>Amazon Lex stores the utterances that users send to your bot. Utterances
 *       are stored for 15 days for use with the <a>GetUtterancesView</a> operation, and then stored indefinitely for use in improving the
 *       ability of your bot to respond to user input.</p>
 *          <p>Use the <code>DeleteUtterances</code> operation to manually delete
 *       stored utterances for a specific user. When you use the
 *         <code>DeleteUtterances</code> operation, utterances stored for improving
 *       your bot's ability to respond to user input are deleted immediately.
 *       Utterances stored for use with the <code>GetUtterancesView</code>
 *       operation are deleted after 15 days.</p>
 *          <p>This operation requires permissions for the
 *         <code>lex:DeleteUtterances</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, DeleteUtterancesCommand } from "../../client-lex-model-building-service/mod.ts";
 * // const { LexModelBuildingServiceClient, DeleteUtterancesCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const command = new DeleteUtterancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteUtterancesCommandInput} for command's `input` shape.
 * @see {@link DeleteUtterancesCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteUtterancesCommand extends $Command<
  DeleteUtterancesCommandInput,
  DeleteUtterancesCommandOutput,
  LexModelBuildingServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteUtterancesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LexModelBuildingServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteUtterancesCommandInput, DeleteUtterancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelBuildingServiceClient";
    const commandName = "DeleteUtterancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteUtterancesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteUtterancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteUtterancesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteUtterancesCommandOutput> {
    return deserializeAws_restJson1DeleteUtterancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
