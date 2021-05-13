import {
  ConnectParticipantClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ConnectParticipantClient.ts";
import { DisconnectParticipantRequest, DisconnectParticipantResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DisconnectParticipantCommand,
  serializeAws_restJson1DisconnectParticipantCommand,
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

export interface DisconnectParticipantCommandInput extends DisconnectParticipantRequest {}
export interface DisconnectParticipantCommandOutput extends DisconnectParticipantResponse, __MetadataBearer {}

/**
 * <p>Disconnects a participant. Note that ConnectionToken is used for invoking this API
 *             instead of ParticipantToken.</p>
 *         <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4
 *                 authentication</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectParticipantClient, DisconnectParticipantCommand } from "../../client-connectparticipant/mod.ts";
 * // const { ConnectParticipantClient, DisconnectParticipantCommand } = require("@aws-sdk/client-connectparticipant"); // CommonJS import
 * const client = new ConnectParticipantClient(config);
 * const command = new DisconnectParticipantCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisconnectParticipantCommandInput} for command's `input` shape.
 * @see {@link DisconnectParticipantCommandOutput} for command's `response` shape.
 * @see {@link ConnectParticipantClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DisconnectParticipantCommand extends $Command<
  DisconnectParticipantCommandInput,
  DisconnectParticipantCommandOutput,
  ConnectParticipantClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisconnectParticipantCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectParticipantClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisconnectParticipantCommandInput, DisconnectParticipantCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectParticipantClient";
    const commandName = "DisconnectParticipantCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisconnectParticipantRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisconnectParticipantResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisconnectParticipantCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DisconnectParticipantCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisconnectParticipantCommandOutput> {
    return deserializeAws_restJson1DisconnectParticipantCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
