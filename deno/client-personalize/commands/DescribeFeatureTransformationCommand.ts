
import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient.ts";
import { DescribeFeatureTransformationRequest, DescribeFeatureTransformationResponse } from "../models/index.ts";
import {
  deserializeAws_json1_1DescribeFeatureTransformationCommand,
  serializeAws_json1_1DescribeFeatureTransformationCommand,
} from "../protocols/Aws_json1_1.ts";
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

export type DescribeFeatureTransformationCommandInput = DescribeFeatureTransformationRequest;
export type DescribeFeatureTransformationCommandOutput = DescribeFeatureTransformationResponse & __MetadataBearer;

export class DescribeFeatureTransformationCommand extends $Command<
  DescribeFeatureTransformationCommandInput,
  DescribeFeatureTransformationCommandOutput,
  PersonalizeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeFeatureTransformationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PersonalizeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeFeatureTransformationCommandInput, DescribeFeatureTransformationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: DescribeFeatureTransformationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeFeatureTransformationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeFeatureTransformationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeFeatureTransformationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeFeatureTransformationCommandOutput> {
    return deserializeAws_json1_1DescribeFeatureTransformationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
