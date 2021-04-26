import { CodeGuruReviewerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruReviewerClient.ts";
import { DescribeRecommendationFeedbackRequest, DescribeRecommendationFeedbackResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DescribeRecommendationFeedbackCommand,
  serializeAws_restJson1DescribeRecommendationFeedbackCommand,
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

export interface DescribeRecommendationFeedbackCommandInput extends DescribeRecommendationFeedbackRequest {}
export interface DescribeRecommendationFeedbackCommandOutput
  extends DescribeRecommendationFeedbackResponse,
    __MetadataBearer {}

/**
 * <p>
 *          Describes the customer feedback for a CodeGuru Reviewer recommendation.
 *       </p>
 */
export class DescribeRecommendationFeedbackCommand extends $Command<
  DescribeRecommendationFeedbackCommandInput,
  DescribeRecommendationFeedbackCommandOutput,
  CodeGuruReviewerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeRecommendationFeedbackCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeGuruReviewerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeRecommendationFeedbackCommandInput, DescribeRecommendationFeedbackCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeGuruReviewerClient";
    const commandName = "DescribeRecommendationFeedbackCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeRecommendationFeedbackRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeRecommendationFeedbackResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeRecommendationFeedbackCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeRecommendationFeedbackCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeRecommendationFeedbackCommandOutput> {
    return deserializeAws_restJson1DescribeRecommendationFeedbackCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
