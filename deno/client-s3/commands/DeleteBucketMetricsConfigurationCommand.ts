import {
  S3ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../S3Client.ts";
import { DeleteBucketMetricsConfigurationRequest } from "../models/index.ts";
import {
  deserializeAws_restXmlDeleteBucketMetricsConfigurationCommand,
  serializeAws_restXmlDeleteBucketMetricsConfigurationCommand
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

export type DeleteBucketMetricsConfigurationCommandInput = DeleteBucketMetricsConfigurationRequest;
export type DeleteBucketMetricsConfigurationCommandOutput = __MetadataBearer;

export class DeleteBucketMetricsConfigurationCommand extends $Command<
  DeleteBucketMetricsConfigurationCommandInput,
  DeleteBucketMetricsConfigurationCommandOutput,
  S3ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteBucketMetricsConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DeleteBucketMetricsConfigurationCommandInput,
    DeleteBucketMetricsConfigurationCommandOutput
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
    input: DeleteBucketMetricsConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restXmlDeleteBucketMetricsConfigurationCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteBucketMetricsConfigurationCommandOutput> {
    return deserializeAws_restXmlDeleteBucketMetricsConfigurationCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
