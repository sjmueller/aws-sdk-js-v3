import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient.ts";
import { StopTrainingEntityRecognizerRequest, StopTrainingEntityRecognizerResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1StopTrainingEntityRecognizerCommand,
  serializeAws_json1_1StopTrainingEntityRecognizerCommand,
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

export type StopTrainingEntityRecognizerCommandInput = StopTrainingEntityRecognizerRequest;
export type StopTrainingEntityRecognizerCommandOutput = StopTrainingEntityRecognizerResponse & __MetadataBearer;

/**
 * <p>Stops an entity recognizer training job while in progress.</p>
 *          <p>If the training job state is <code>TRAINING</code>, the job is marked for termination and
 *       put into the <code>STOP_REQUESTED</code> state. If the training job completes before it can be
 *       stopped, it is put into the <code>TRAINED</code>; otherwise the training job is stopped and
 *       putted into the <code>STOPPED</code> state and the service sends back an HTTP 200 response
 *       with an empty HTTP body.</p>
 */
export class StopTrainingEntityRecognizerCommand extends $Command<
  StopTrainingEntityRecognizerCommandInput,
  StopTrainingEntityRecognizerCommandOutput,
  ComprehendClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StopTrainingEntityRecognizerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ComprehendClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StopTrainingEntityRecognizerCommandInput, StopTrainingEntityRecognizerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendClient";
    const commandName = "StopTrainingEntityRecognizerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopTrainingEntityRecognizerRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StopTrainingEntityRecognizerResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopTrainingEntityRecognizerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StopTrainingEntityRecognizerCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StopTrainingEntityRecognizerCommandOutput> {
    return deserializeAws_json1_1StopTrainingEntityRecognizerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
