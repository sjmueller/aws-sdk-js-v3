import { CodeGuruProfilerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruProfilerClient.ts";
import { ConfigureAgentRequest, ConfigureAgentResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ConfigureAgentCommand,
  serializeAws_restJson1ConfigureAgentCommand,
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

export type ConfigureAgentCommandInput = ConfigureAgentRequest;
export type ConfigureAgentCommandOutput = ConfigureAgentResponse & __MetadataBearer;

/**
 * <p>
 *           Used by profiler agents to report their current state and to receive remote
 *           configuration updates. For example, <code>ConfigureAgent</code> can be used
 *          to tell an agent whether to profile or not and for how long to return profiling data.
 *       </p>
 */
export class ConfigureAgentCommand extends $Command<
  ConfigureAgentCommandInput,
  ConfigureAgentCommandOutput,
  CodeGuruProfilerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ConfigureAgentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeGuruProfilerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ConfigureAgentCommandInput, ConfigureAgentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeGuruProfilerClient";
    const commandName = "ConfigureAgentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ConfigureAgentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ConfigureAgentResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ConfigureAgentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ConfigureAgentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ConfigureAgentCommandOutput> {
    return deserializeAws_restJson1ConfigureAgentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
