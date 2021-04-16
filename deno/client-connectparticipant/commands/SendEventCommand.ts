import {
  ConnectParticipantClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ConnectParticipantClient.ts";
import { SendEventRequest, SendEventResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1SendEventCommand,
  serializeAws_restJson1SendEventCommand,
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

export type SendEventCommandInput = SendEventRequest;
export type SendEventCommandOutput = SendEventResponse & __MetadataBearer;

/**
 * <p>Sends an event. Note that ConnectionToken is used for invoking this API instead of
 *             ParticipantToken.</p>
 *         <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4
 *                 authentication</a>.</p>
 */
export class SendEventCommand extends $Command<
  SendEventCommandInput,
  SendEventCommandOutput,
  ConnectParticipantClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SendEventCommandInput) {
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
  ): Handler<SendEventCommandInput, SendEventCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectParticipantClient";
    const commandName = "SendEventCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SendEventRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SendEventResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SendEventCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1SendEventCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SendEventCommandOutput> {
    return deserializeAws_restJson1SendEventCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
