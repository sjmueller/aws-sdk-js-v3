import { IoTAnalyticsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTAnalyticsClient.ts";
import { RunPipelineActivityRequest, RunPipelineActivityResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1RunPipelineActivityCommand,
  serializeAws_restJson1RunPipelineActivityCommand,
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

export type RunPipelineActivityCommandInput = RunPipelineActivityRequest;
export type RunPipelineActivityCommandOutput = RunPipelineActivityResponse & __MetadataBearer;

/**
 * <p>Simulates the results of running a pipeline activity on a message payload.</p>
 */
export class RunPipelineActivityCommand extends $Command<
  RunPipelineActivityCommandInput,
  RunPipelineActivityCommandOutput,
  IoTAnalyticsClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RunPipelineActivityCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTAnalyticsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RunPipelineActivityCommandInput, RunPipelineActivityCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTAnalyticsClient";
    const commandName = "RunPipelineActivityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RunPipelineActivityRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RunPipelineActivityResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RunPipelineActivityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1RunPipelineActivityCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RunPipelineActivityCommandOutput> {
    return deserializeAws_restJson1RunPipelineActivityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
