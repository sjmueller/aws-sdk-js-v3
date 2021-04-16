import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient.ts";
import { StartMetricStreamsInput, StartMetricStreamsOutput } from "../models/models_0.ts";
import {
  deserializeAws_queryStartMetricStreamsCommand,
  serializeAws_queryStartMetricStreamsCommand,
} from "../protocols/Aws_query.ts";
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

export type StartMetricStreamsCommandInput = StartMetricStreamsInput;
export type StartMetricStreamsCommandOutput = StartMetricStreamsOutput & __MetadataBearer;

/**
 * <p>Starts the streaming of metrics for one or more of your metric streams.</p>
 */
export class StartMetricStreamsCommand extends $Command<
  StartMetricStreamsCommandInput,
  StartMetricStreamsCommandOutput,
  CloudWatchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartMetricStreamsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartMetricStreamsCommandInput, StartMetricStreamsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchClient";
    const commandName = "StartMetricStreamsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartMetricStreamsInput.filterSensitiveLog,
      outputFilterSensitiveLog: StartMetricStreamsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartMetricStreamsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryStartMetricStreamsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartMetricStreamsCommandOutput> {
    return deserializeAws_queryStartMetricStreamsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
