
import { ComputeOptimizerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComputeOptimizerClient.ts";
import {
  GetEC2RecommendationProjectedMetricsRequest,
  GetEC2RecommendationProjectedMetricsResponse,
} from "../models/models_0.ts";
import {
  deserializeAws_json1_0GetEC2RecommendationProjectedMetricsCommand,
  serializeAws_json1_0GetEC2RecommendationProjectedMetricsCommand,
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

export type GetEC2RecommendationProjectedMetricsCommandInput = GetEC2RecommendationProjectedMetricsRequest;
export type GetEC2RecommendationProjectedMetricsCommandOutput = GetEC2RecommendationProjectedMetricsResponse &
  __MetadataBearer;

export class GetEC2RecommendationProjectedMetricsCommand extends $Command<
  GetEC2RecommendationProjectedMetricsCommandInput,
  GetEC2RecommendationProjectedMetricsCommandOutput,
  ComputeOptimizerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetEC2RecommendationProjectedMetricsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ComputeOptimizerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetEC2RecommendationProjectedMetricsCommandInput, GetEC2RecommendationProjectedMetricsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComputeOptimizerClient";
    const commandName = "GetEC2RecommendationProjectedMetricsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetEC2RecommendationProjectedMetricsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetEC2RecommendationProjectedMetricsResponse.filterSensitiveLog,
    };

    if (typeof logger.info === "function") {
      logger.info({
        clientName,
        commandName,
      });
    }

    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetEC2RecommendationProjectedMetricsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_0GetEC2RecommendationProjectedMetricsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetEC2RecommendationProjectedMetricsCommandOutput> {
    return deserializeAws_json1_0GetEC2RecommendationProjectedMetricsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
