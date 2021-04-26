import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient.ts";
import { StartKeyPhrasesDetectionJobRequest, StartKeyPhrasesDetectionJobResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1StartKeyPhrasesDetectionJobCommand,
  serializeAws_json1_1StartKeyPhrasesDetectionJobCommand,
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

export interface StartKeyPhrasesDetectionJobCommandInput extends StartKeyPhrasesDetectionJobRequest {}
export interface StartKeyPhrasesDetectionJobCommandOutput
  extends StartKeyPhrasesDetectionJobResponse,
    __MetadataBearer {}

/**
 * <p>Starts an asynchronous key phrase detection job for a collection of documents. Use the
 *          operation to track the status of a
 *       job.</p>
 */
export class StartKeyPhrasesDetectionJobCommand extends $Command<
  StartKeyPhrasesDetectionJobCommandInput,
  StartKeyPhrasesDetectionJobCommandOutput,
  ComprehendClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartKeyPhrasesDetectionJobCommandInput) {
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
  ): Handler<StartKeyPhrasesDetectionJobCommandInput, StartKeyPhrasesDetectionJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendClient";
    const commandName = "StartKeyPhrasesDetectionJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartKeyPhrasesDetectionJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartKeyPhrasesDetectionJobResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartKeyPhrasesDetectionJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartKeyPhrasesDetectionJobCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartKeyPhrasesDetectionJobCommandOutput> {
    return deserializeAws_json1_1StartKeyPhrasesDetectionJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
