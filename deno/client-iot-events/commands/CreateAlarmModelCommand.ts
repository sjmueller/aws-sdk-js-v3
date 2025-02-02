import { IoTEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsClient.ts";
import { CreateAlarmModelRequest, CreateAlarmModelResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1CreateAlarmModelCommand,
  serializeAws_restJson1CreateAlarmModelCommand,
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

export interface CreateAlarmModelCommandInput extends CreateAlarmModelRequest {}
export interface CreateAlarmModelCommandOutput extends CreateAlarmModelResponse, __MetadataBearer {}

/**
 * <p>Creates an alarm model to monitor an AWS IoT Events input attribute. You can use the alarm to get
 *       notified when the value is outside a specified range. For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/create-alarms.html">Create an
 *         alarm model</a> in the <i>AWS IoT Events Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsClient, CreateAlarmModelCommand } from "../../client-iot-events/mod.ts";
 * // const { IoTEventsClient, CreateAlarmModelCommand } = require("@aws-sdk/client-iot-events"); // CommonJS import
 * const client = new IoTEventsClient(config);
 * const command = new CreateAlarmModelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAlarmModelCommandInput} for command's `input` shape.
 * @see {@link CreateAlarmModelCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateAlarmModelCommand extends $Command<
  CreateAlarmModelCommandInput,
  CreateAlarmModelCommandOutput,
  IoTEventsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateAlarmModelCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTEventsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateAlarmModelCommandInput, CreateAlarmModelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTEventsClient";
    const commandName = "CreateAlarmModelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateAlarmModelRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateAlarmModelResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateAlarmModelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateAlarmModelCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateAlarmModelCommandOutput> {
    return deserializeAws_restJson1CreateAlarmModelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
