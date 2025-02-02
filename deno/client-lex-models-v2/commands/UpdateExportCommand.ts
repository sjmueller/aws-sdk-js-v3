import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client.ts";
import { UpdateExportRequest, UpdateExportResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1UpdateExportCommand,
  serializeAws_restJson1UpdateExportCommand,
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

export interface UpdateExportCommandInput extends UpdateExportRequest {}
export interface UpdateExportCommandOutput extends UpdateExportResponse, __MetadataBearer {}

/**
 * <p>Updates the password used to protect an export zip archive.</p>
 *          <p>The password is not required. If you don't supply a password, Amazon Lex
 *          generates a zip file that is not protected by a password. This is the
 *          archive that is available at the pre-signed S3 URL provided by the
 *              operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, UpdateExportCommand } from "../../client-lex-models-v2/mod.ts";
 * // const { LexModelsV2Client, UpdateExportCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new UpdateExportCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateExportCommandInput} for command's `input` shape.
 * @see {@link UpdateExportCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateExportCommand extends $Command<
  UpdateExportCommandInput,
  UpdateExportCommandOutput,
  LexModelsV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateExportCommandInput) {
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
  ): Handler<UpdateExportCommandInput, UpdateExportCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelsV2Client";
    const commandName = "UpdateExportCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateExportRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateExportResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateExportCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateExportCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateExportCommandOutput> {
    return deserializeAws_restJson1UpdateExportCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
