import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient.ts";
import { ListCustomMetricsRequest, ListCustomMetricsResponse } from "../models/models_1.ts";
import {
  deserializeAws_restJson1ListCustomMetricsCommand,
  serializeAws_restJson1ListCustomMetricsCommand,
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

export interface ListCustomMetricsCommandInput extends ListCustomMetricsRequest {}
export interface ListCustomMetricsCommandOutput extends ListCustomMetricsResponse, __MetadataBearer {}

/**
 * <p>
 *       Lists your Device Defender detect custom metrics.
 *     </p>
 */
export class ListCustomMetricsCommand extends $Command<
  ListCustomMetricsCommandInput,
  ListCustomMetricsCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListCustomMetricsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListCustomMetricsCommandInput, ListCustomMetricsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "ListCustomMetricsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListCustomMetricsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListCustomMetricsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListCustomMetricsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListCustomMetricsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListCustomMetricsCommandOutput> {
    return deserializeAws_restJson1ListCustomMetricsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
