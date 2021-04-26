import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient.ts";
import { CreateEndpointResponse, CreatePlatformEndpointInput } from "../models/models_0.ts";
import {
  deserializeAws_queryCreatePlatformEndpointCommand,
  serializeAws_queryCreatePlatformEndpointCommand,
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

export interface CreatePlatformEndpointCommandInput extends CreatePlatformEndpointInput {}
export interface CreatePlatformEndpointCommandOutput extends CreateEndpointResponse, __MetadataBearer {}

/**
 * <p>Creates an endpoint for a device and mobile app on one of the supported push
 *             notification services, such as GCM (Firebase Cloud Messaging) and APNS.
 *                 <code>CreatePlatformEndpoint</code> requires the <code>PlatformApplicationArn</code>
 *             that is returned from <code>CreatePlatformApplication</code>. You can use the returned
 *                 <code>EndpointArn</code> to send a message to a mobile app or by the
 *                 <code>Subscribe</code> action for subscription to a topic. The
 *                 <code>CreatePlatformEndpoint</code> action is idempotent, so if the requester
 *             already owns an endpoint with the same device token and attributes, that endpoint's ARN
 *             is returned without creating a new endpoint. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push
 *                 Notifications</a>. </p>
 *         <p>When using <code>CreatePlatformEndpoint</code> with Baidu, two attributes must be
 *             provided: ChannelId and UserId. The token field must also contain the ChannelId. For
 *             more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePushBaiduEndpoint.html">Creating an Amazon SNS Endpoint
 *                 for Baidu</a>. </p>
 */
export class CreatePlatformEndpointCommand extends $Command<
  CreatePlatformEndpointCommandInput,
  CreatePlatformEndpointCommandOutput,
  SNSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreatePlatformEndpointCommandInput) {
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
  ): Handler<CreatePlatformEndpointCommandInput, CreatePlatformEndpointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SNSClient";
    const commandName = "CreatePlatformEndpointCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreatePlatformEndpointInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateEndpointResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreatePlatformEndpointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreatePlatformEndpointCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreatePlatformEndpointCommandOutput> {
    return deserializeAws_queryCreatePlatformEndpointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
