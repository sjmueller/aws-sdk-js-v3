import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient.ts";
import { DeletePlatformApplicationInput } from "../models/models_0.ts";
import {
  deserializeAws_queryDeletePlatformApplicationCommand,
  serializeAws_queryDeletePlatformApplicationCommand,
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

export interface DeletePlatformApplicationCommandInput extends DeletePlatformApplicationInput {}
export interface DeletePlatformApplicationCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a platform application object for one of the supported push notification
 *             services, such as APNS and GCM (Firebase Cloud Messaging). For more information, see
 *                 <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS
 *                 Mobile Push Notifications</a>. </p>
 */
export class DeletePlatformApplicationCommand extends $Command<
  DeletePlatformApplicationCommandInput,
  DeletePlatformApplicationCommandOutput,
  SNSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeletePlatformApplicationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SNSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeletePlatformApplicationCommandInput, DeletePlatformApplicationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SNSClient";
    const commandName = "DeletePlatformApplicationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeletePlatformApplicationInput.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeletePlatformApplicationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeletePlatformApplicationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeletePlatformApplicationCommandOutput> {
    return deserializeAws_queryDeletePlatformApplicationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
