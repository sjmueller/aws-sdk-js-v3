import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient.ts";
import { StartTaskExecutionRequest, StartTaskExecutionResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1StartTaskExecutionCommand,
  serializeAws_json1_1StartTaskExecutionCommand,
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

export type StartTaskExecutionCommandInput = StartTaskExecutionRequest;
export type StartTaskExecutionCommandOutput = StartTaskExecutionResponse & __MetadataBearer;

/**
 * <p>Starts a specific invocation of a task. A <code>TaskExecution</code> value represents
 *       an individual run of a task. Each task can have at most one <code>TaskExecution</code> at a
 *       time.</p>
 *          <p>
 *             <code>TaskExecution</code> has the following transition phases: INITIALIZING |
 *       PREPARING | TRANSFERRING | VERIFYING | SUCCESS/FAILURE. </p>
 *
 *          <p>For detailed information, see the Task Execution section in the Components and
 *       Terminology topic in the <i>AWS DataSync User Guide</i>.</p>
 */
export class StartTaskExecutionCommand extends $Command<
  StartTaskExecutionCommandInput,
  StartTaskExecutionCommandOutput,
  DataSyncClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartTaskExecutionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartTaskExecutionCommandInput, StartTaskExecutionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataSyncClient";
    const commandName = "StartTaskExecutionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartTaskExecutionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartTaskExecutionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartTaskExecutionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartTaskExecutionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartTaskExecutionCommandOutput> {
    return deserializeAws_json1_1StartTaskExecutionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
