import { ComputeOptimizerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComputeOptimizerClient.ts";
import { GetEBSVolumeRecommendationsRequest, GetEBSVolumeRecommendationsResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_0GetEBSVolumeRecommendationsCommand,
  serializeAws_json1_0GetEBSVolumeRecommendationsCommand,
} from "../protocols/Aws_json1_0.ts";
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

export interface GetEBSVolumeRecommendationsCommandInput extends GetEBSVolumeRecommendationsRequest {}
export interface GetEBSVolumeRecommendationsCommandOutput
  extends GetEBSVolumeRecommendationsResponse,
    __MetadataBearer {}

/**
 * <p>Returns Amazon Elastic Block Store (Amazon EBS) volume recommendations.</p>
 *
 *         <p>AWS Compute Optimizer generates recommendations for Amazon EBS volumes that meet a specific set of
 *             requirements. For more information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html">Supported resources and
 *                 requirements</a> in the <i>AWS Compute Optimizer User Guide</i>.</p>
 */
export class GetEBSVolumeRecommendationsCommand extends $Command<
  GetEBSVolumeRecommendationsCommandInput,
  GetEBSVolumeRecommendationsCommandOutput,
  ComputeOptimizerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetEBSVolumeRecommendationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ComputeOptimizerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetEBSVolumeRecommendationsCommandInput, GetEBSVolumeRecommendationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComputeOptimizerClient";
    const commandName = "GetEBSVolumeRecommendationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetEBSVolumeRecommendationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetEBSVolumeRecommendationsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetEBSVolumeRecommendationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0GetEBSVolumeRecommendationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetEBSVolumeRecommendationsCommandOutput> {
    return deserializeAws_json1_0GetEBSVolumeRecommendationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
