import { DevOpsGuruClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsGuruClient.ts";
import { ListNotificationChannelsRequest, ListNotificationChannelsResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListNotificationChannelsCommand,
  serializeAws_restJson1ListNotificationChannelsCommand,
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

export interface ListNotificationChannelsCommandInput extends ListNotificationChannelsRequest {}
export interface ListNotificationChannelsCommandOutput extends ListNotificationChannelsResponse, __MetadataBearer {}

/**
 * <p>
 *    		Returns a list of notification channels configured for DevOps Guru. Each notification channel is used to notify you when
 *    		DevOps Guru generates an insight that contains information about how to improve your operations. The one
 *       	supported notification channel is Amazon Simple Notification Service (Amazon SNS).
 *    	</p>
 */
export class ListNotificationChannelsCommand extends $Command<
  ListNotificationChannelsCommandInput,
  ListNotificationChannelsCommandOutput,
  DevOpsGuruClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListNotificationChannelsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DevOpsGuruClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListNotificationChannelsCommandInput, ListNotificationChannelsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DevOpsGuruClient";
    const commandName = "ListNotificationChannelsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListNotificationChannelsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListNotificationChannelsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListNotificationChannelsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListNotificationChannelsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListNotificationChannelsCommandOutput> {
    return deserializeAws_restJson1ListNotificationChannelsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
