import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient.ts";
import { GetUserSettingsRequest } from "../models/models_0.ts";
import { GetUserSettingsResponse } from "../models/models_1.ts";
import {
  deserializeAws_restJson1GetUserSettingsCommand,
  serializeAws_restJson1GetUserSettingsCommand,
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

export interface GetUserSettingsCommandInput extends GetUserSettingsRequest {}
export interface GetUserSettingsCommandOutput extends GetUserSettingsResponse, __MetadataBearer {}

/**
 * <p>Retrieves settings for the specified user ID, such as any associated phone number settings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, GetUserSettingsCommand } from "../../client-chime/mod.ts";
 * // const { ChimeClient, GetUserSettingsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new GetUserSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetUserSettingsCommandInput} for command's `input` shape.
 * @see {@link GetUserSettingsCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetUserSettingsCommand extends $Command<
  GetUserSettingsCommandInput,
  GetUserSettingsCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetUserSettingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetUserSettingsCommandInput, GetUserSettingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "GetUserSettingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetUserSettingsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetUserSettingsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetUserSettingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetUserSettingsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetUserSettingsCommandOutput> {
    return deserializeAws_restJson1GetUserSettingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
