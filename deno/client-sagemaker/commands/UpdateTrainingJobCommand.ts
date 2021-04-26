import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient.ts";
import { UpdateTrainingJobRequest, UpdateTrainingJobResponse } from "../models/models_2.ts";
import {
  deserializeAws_json1_1UpdateTrainingJobCommand,
  serializeAws_json1_1UpdateTrainingJobCommand,
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

export interface UpdateTrainingJobCommandInput extends UpdateTrainingJobRequest {}
export interface UpdateTrainingJobCommandOutput extends UpdateTrainingJobResponse, __MetadataBearer {}

/**
 * <p>Update a model training job to request a new Debugger profiling configuration.</p>
 */
export class UpdateTrainingJobCommand extends $Command<
  UpdateTrainingJobCommandInput,
  UpdateTrainingJobCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateTrainingJobCommandInput) {
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
  ): Handler<UpdateTrainingJobCommandInput, UpdateTrainingJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "UpdateTrainingJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateTrainingJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateTrainingJobResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateTrainingJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateTrainingJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateTrainingJobCommandOutput> {
    return deserializeAws_json1_1UpdateTrainingJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
