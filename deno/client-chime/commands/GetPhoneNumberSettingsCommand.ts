import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient.ts";
import { GetPhoneNumberSettingsResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetPhoneNumberSettingsCommand,
  serializeAws_restJson1GetPhoneNumberSettingsCommand,
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

export interface GetPhoneNumberSettingsCommandInput {}
export interface GetPhoneNumberSettingsCommandOutput extends GetPhoneNumberSettingsResponse, __MetadataBearer {}

/**
 * <p>Retrieves the phone number settings for the administrator's AWS account, such as the default outbound calling name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, GetPhoneNumberSettingsCommand } from "../../client-chime/mod.ts";
 * // const { ChimeClient, GetPhoneNumberSettingsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new GetPhoneNumberSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPhoneNumberSettingsCommandInput} for command's `input` shape.
 * @see {@link GetPhoneNumberSettingsCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetPhoneNumberSettingsCommand extends $Command<
  GetPhoneNumberSettingsCommandInput,
  GetPhoneNumberSettingsCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetPhoneNumberSettingsCommandInput) {
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
  ): Handler<GetPhoneNumberSettingsCommandInput, GetPhoneNumberSettingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "GetPhoneNumberSettingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (input: any) => input,
      outputFilterSensitiveLog: GetPhoneNumberSettingsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetPhoneNumberSettingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetPhoneNumberSettingsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetPhoneNumberSettingsCommandOutput> {
    return deserializeAws_restJson1GetPhoneNumberSettingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
