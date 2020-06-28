import {
  S3ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../S3Client.ts";
import {
  ListBucketMetricsConfigurationsOutput,
  ListBucketMetricsConfigurationsRequest
} from "../models/index.ts";
import {
  deserializeAws_restXmlListBucketMetricsConfigurationsCommand,
  serializeAws_restXmlListBucketMetricsConfigurationsCommand
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

export type ListBucketMetricsConfigurationsCommandInput = ListBucketMetricsConfigurationsRequest;
export type ListBucketMetricsConfigurationsCommandOutput = ListBucketMetricsConfigurationsOutput &
  __MetadataBearer;

export class ListBucketMetricsConfigurationsCommand extends $Command<
  ListBucketMetricsConfigurationsCommandInput,
  ListBucketMetricsConfigurationsCommandOutput,
  S3ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListBucketMetricsConfigurationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ListBucketMetricsConfigurationsCommandInput,
    ListBucketMetricsConfigurationsCommandOutput
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
    input: ListBucketMetricsConfigurationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restXmlListBucketMetricsConfigurationsCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListBucketMetricsConfigurationsCommandOutput> {
    return deserializeAws_restXmlListBucketMetricsConfigurationsCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
