import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient.ts";
import { GetVoiceConnectorGroupRequest, GetVoiceConnectorGroupResponse } from "../models/models_1.ts";
import {
  deserializeAws_restJson1GetVoiceConnectorGroupCommand,
  serializeAws_restJson1GetVoiceConnectorGroupCommand,
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

export interface GetVoiceConnectorGroupCommandInput extends GetVoiceConnectorGroupRequest {}
export interface GetVoiceConnectorGroupCommandOutput extends GetVoiceConnectorGroupResponse, __MetadataBearer {}

/**
 * <p>
 * Retrieves details for the specified Amazon Chime Voice Connector group, such as timestamps,name, and associated <code>VoiceConnectorItems</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, GetVoiceConnectorGroupCommand } from "../../client-chime/mod.ts";
 * // const { ChimeClient, GetVoiceConnectorGroupCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new GetVoiceConnectorGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetVoiceConnectorGroupCommandInput} for command's `input` shape.
 * @see {@link GetVoiceConnectorGroupCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetVoiceConnectorGroupCommand extends $Command<
  GetVoiceConnectorGroupCommandInput,
  GetVoiceConnectorGroupCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetVoiceConnectorGroupCommandInput) {
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
  ): Handler<GetVoiceConnectorGroupCommandInput, GetVoiceConnectorGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "GetVoiceConnectorGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetVoiceConnectorGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetVoiceConnectorGroupResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetVoiceConnectorGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetVoiceConnectorGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetVoiceConnectorGroupCommandOutput> {
    return deserializeAws_restJson1GetVoiceConnectorGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
