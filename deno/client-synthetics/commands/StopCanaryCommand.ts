import { ServiceInputTypes, ServiceOutputTypes, SyntheticsClientResolvedConfig } from "../SyntheticsClient.ts";
import { StopCanaryRequest, StopCanaryResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1StopCanaryCommand,
  serializeAws_restJson1StopCanaryCommand,
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

export type StopCanaryCommandInput = StopCanaryRequest;
export type StopCanaryCommandOutput = StopCanaryResponse & __MetadataBearer;

/**
 * <p>Stops the canary to prevent all future runs. If the canary is currently running,
 *          Synthetics stops waiting for the current run of the specified canary to complete. The
 *         run that is in progress completes on its own, publishes metrics, and uploads artifacts, but
 *          it is not recorded in Synthetics as a completed run.</p>
 *          <p>You can use <code>StartCanary</code> to start it running again
 *          with the canary’s current schedule at any point in the future.  </p>
 */
export class StopCanaryCommand extends $Command<
  StopCanaryCommandInput,
  StopCanaryCommandOutput,
  SyntheticsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StopCanaryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SyntheticsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StopCanaryCommandInput, StopCanaryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SyntheticsClient";
    const commandName = "StopCanaryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopCanaryRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StopCanaryResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopCanaryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StopCanaryCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopCanaryCommandOutput> {
    return deserializeAws_restJson1StopCanaryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
