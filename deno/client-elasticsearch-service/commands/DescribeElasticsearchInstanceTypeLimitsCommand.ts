
import {
  ElasticsearchServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticsearchServiceClient.ts";
import {
  DescribeElasticsearchInstanceTypeLimitsRequest,
  DescribeElasticsearchInstanceTypeLimitsResponse,
} from "../models/index.ts";
import {
  deserializeAws_restJson1DescribeElasticsearchInstanceTypeLimitsCommand,
  serializeAws_restJson1DescribeElasticsearchInstanceTypeLimitsCommand,
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

export type DescribeElasticsearchInstanceTypeLimitsCommandInput = DescribeElasticsearchInstanceTypeLimitsRequest;
export type DescribeElasticsearchInstanceTypeLimitsCommandOutput = DescribeElasticsearchInstanceTypeLimitsResponse &
  __MetadataBearer;

export class DescribeElasticsearchInstanceTypeLimitsCommand extends $Command<
  DescribeElasticsearchInstanceTypeLimitsCommandInput,
  DescribeElasticsearchInstanceTypeLimitsCommandOutput,
  ElasticsearchServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeElasticsearchInstanceTypeLimitsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticsearchServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeElasticsearchInstanceTypeLimitsCommandInput,
    DescribeElasticsearchInstanceTypeLimitsCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: DescribeElasticsearchInstanceTypeLimitsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeElasticsearchInstanceTypeLimitsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeElasticsearchInstanceTypeLimitsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeElasticsearchInstanceTypeLimitsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeElasticsearchInstanceTypeLimitsCommandOutput> {
    return deserializeAws_restJson1DescribeElasticsearchInstanceTypeLimitsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
