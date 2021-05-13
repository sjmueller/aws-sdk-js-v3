import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient.ts";
import { StopTrainingJobRequest } from "../models/models_2.ts";
import {
  deserializeAws_json1_1StopTrainingJobCommand,
  serializeAws_json1_1StopTrainingJobCommand,
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

export interface StopTrainingJobCommandInput extends StopTrainingJobRequest {}
export interface StopTrainingJobCommandOutput extends __MetadataBearer {}

/**
 * <p>Stops a training job. To stop a job, Amazon SageMaker sends the algorithm the
 *                 <code>SIGTERM</code> signal, which delays job termination for 120 seconds.
 *             Algorithms might use this 120-second window to save the model artifacts, so the results
 *             of the training is not lost. </p>
 *         <p>When it receives a <code>StopTrainingJob</code> request, Amazon SageMaker changes the status of
 *             the job to <code>Stopping</code>. After Amazon SageMaker stops the job, it sets the status to
 *                 <code>Stopped</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, StopTrainingJobCommand } from "../../client-sagemaker/mod.ts";
 * // const { SageMakerClient, StopTrainingJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new StopTrainingJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopTrainingJobCommandInput} for command's `input` shape.
 * @see {@link StopTrainingJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class StopTrainingJobCommand extends $Command<
  StopTrainingJobCommandInput,
  StopTrainingJobCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StopTrainingJobCommandInput) {
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
  ): Handler<StopTrainingJobCommandInput, StopTrainingJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "StopTrainingJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopTrainingJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopTrainingJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StopTrainingJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopTrainingJobCommandOutput> {
    return deserializeAws_json1_1StopTrainingJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
