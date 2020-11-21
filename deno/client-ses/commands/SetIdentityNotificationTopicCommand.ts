
import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient.ts";
import { SetIdentityNotificationTopicRequest, SetIdentityNotificationTopicResponse } from "../models/models_0.ts";
import {
  deserializeAws_querySetIdentityNotificationTopicCommand,
  serializeAws_querySetIdentityNotificationTopicCommand,
} from "../protocols/Aws_query.ts";
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

export type SetIdentityNotificationTopicCommandInput = SetIdentityNotificationTopicRequest;
export type SetIdentityNotificationTopicCommandOutput = SetIdentityNotificationTopicResponse & __MetadataBearer;

export class SetIdentityNotificationTopicCommand extends $Command<
  SetIdentityNotificationTopicCommandInput,
  SetIdentityNotificationTopicCommandOutput,
  SESClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SetIdentityNotificationTopicCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SetIdentityNotificationTopicCommandInput, SetIdentityNotificationTopicCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "SetIdentityNotificationTopicCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SetIdentityNotificationTopicRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SetIdentityNotificationTopicResponse.filterSensitiveLog,
    };

    if (typeof logger.info === "function") {
      logger.info({
        clientName,
        commandName,
      });
    }

    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SetIdentityNotificationTopicCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_querySetIdentityNotificationTopicCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<SetIdentityNotificationTopicCommandOutput> {
    return deserializeAws_querySetIdentityNotificationTopicCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
