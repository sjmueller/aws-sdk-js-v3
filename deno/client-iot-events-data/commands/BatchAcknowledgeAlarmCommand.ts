import { IoTEventsDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsDataClient.ts";
import { BatchAcknowledgeAlarmRequest, BatchAcknowledgeAlarmResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1BatchAcknowledgeAlarmCommand,
  serializeAws_restJson1BatchAcknowledgeAlarmCommand,
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

export interface BatchAcknowledgeAlarmCommandInput extends BatchAcknowledgeAlarmRequest {}
export interface BatchAcknowledgeAlarmCommandOutput extends BatchAcknowledgeAlarmResponse, __MetadataBearer {}

/**
 * <p>Acknowledges one or more alarms. The alarms change to the <code>ACKNOWLEDGED</code> state
 *       after you acknowledge them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsDataClient, BatchAcknowledgeAlarmCommand } from "../../client-iot-events-data/mod.ts";
 * // const { IoTEventsDataClient, BatchAcknowledgeAlarmCommand } = require("@aws-sdk/client-iot-events-data"); // CommonJS import
 * const client = new IoTEventsDataClient(config);
 * const command = new BatchAcknowledgeAlarmCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchAcknowledgeAlarmCommandInput} for command's `input` shape.
 * @see {@link BatchAcknowledgeAlarmCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsDataClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class BatchAcknowledgeAlarmCommand extends $Command<
  BatchAcknowledgeAlarmCommandInput,
  BatchAcknowledgeAlarmCommandOutput,
  IoTEventsDataClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchAcknowledgeAlarmCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTEventsDataClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchAcknowledgeAlarmCommandInput, BatchAcknowledgeAlarmCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTEventsDataClient";
    const commandName = "BatchAcknowledgeAlarmCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchAcknowledgeAlarmRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchAcknowledgeAlarmResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchAcknowledgeAlarmCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchAcknowledgeAlarmCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchAcknowledgeAlarmCommandOutput> {
    return deserializeAws_restJson1BatchAcknowledgeAlarmCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
