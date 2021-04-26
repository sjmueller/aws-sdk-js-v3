import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient.ts";
import { GetMetricStreamInput, GetMetricStreamOutput } from "../models/models_0.ts";
import {
  deserializeAws_queryGetMetricStreamCommand,
  serializeAws_queryGetMetricStreamCommand,
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

export interface GetMetricStreamCommandInput extends GetMetricStreamInput {}
export interface GetMetricStreamCommandOutput extends GetMetricStreamOutput, __MetadataBearer {}

/**
 * <p>Returns information about the metric stream that you specify.</p>
 */
export class GetMetricStreamCommand extends $Command<
  GetMetricStreamCommandInput,
  GetMetricStreamCommandOutput,
  CloudWatchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetMetricStreamCommandInput) {
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
  ): Handler<GetMetricStreamCommandInput, GetMetricStreamCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchClient";
    const commandName = "GetMetricStreamCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetMetricStreamInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetMetricStreamOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetMetricStreamCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryGetMetricStreamCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetMetricStreamCommandOutput> {
    return deserializeAws_queryGetMetricStreamCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
