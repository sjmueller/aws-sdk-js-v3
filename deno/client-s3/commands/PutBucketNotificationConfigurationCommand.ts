import {
  S3ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../S3Client.ts";
import { PutBucketNotificationConfigurationRequest } from "../models/index.ts";
import {
  deserializeAws_restXmlPutBucketNotificationConfigurationCommand,
  serializeAws_restXmlPutBucketNotificationConfigurationCommand
} from "../protocols/Aws_restXml.ts";
import { getBucketEndpointPlugin } from "../../middleware-bucket-endpoint/mod.ts";
import { getSerdePlugin } from "../../middleware-serde/mod.ts";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "../../protocol-http/mod.ts";
import { Command as $Command } from "../../smithy-client/mod.ts";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext
} from "../../types/mod.ts";

export type PutBucketNotificationConfigurationCommandInput = PutBucketNotificationConfigurationRequest;
export type PutBucketNotificationConfigurationCommandOutput = __MetadataBearer;

export class PutBucketNotificationConfigurationCommand extends $Command<
  PutBucketNotificationConfigurationCommandInput,
  PutBucketNotificationConfigurationCommandOutput,
  S3ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutBucketNotificationConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    PutBucketNotificationConfigurationCommandInput,
    PutBucketNotificationConfigurationCommandOutput
  > {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );
    this.middlewareStack.use(getBucketEndpointPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: PutBucketNotificationConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restXmlPutBucketNotificationConfigurationCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutBucketNotificationConfigurationCommandOutput> {
    return deserializeAws_restXmlPutBucketNotificationConfigurationCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
