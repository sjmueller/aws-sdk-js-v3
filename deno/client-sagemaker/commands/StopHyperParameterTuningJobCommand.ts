import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient.ts";
import { StopHyperParameterTuningJobRequest } from "../models/models_2.ts";
import {
  deserializeAws_json1_1StopHyperParameterTuningJobCommand,
  serializeAws_json1_1StopHyperParameterTuningJobCommand,
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

export interface StopHyperParameterTuningJobCommandInput extends StopHyperParameterTuningJobRequest {}
export interface StopHyperParameterTuningJobCommandOutput extends __MetadataBearer {}

/**
 * <p>Stops a running hyperparameter tuning job and all running training jobs that the
 *             tuning job launched.</p>
 *         <p>All model artifacts output from the training jobs are stored in Amazon Simple Storage Service (Amazon S3). All
 *             data that the training jobs write to Amazon CloudWatch Logs are still available in CloudWatch. After the
 *             tuning job moves to the <code>Stopped</code> state, it releases all
 *             reserved
 *             resources for the tuning job.</p>
 */
export class StopHyperParameterTuningJobCommand extends $Command<
  StopHyperParameterTuningJobCommandInput,
  StopHyperParameterTuningJobCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StopHyperParameterTuningJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StopHyperParameterTuningJobCommandInput, StopHyperParameterTuningJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "StopHyperParameterTuningJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopHyperParameterTuningJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopHyperParameterTuningJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StopHyperParameterTuningJobCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StopHyperParameterTuningJobCommandOutput> {
    return deserializeAws_json1_1StopHyperParameterTuningJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
