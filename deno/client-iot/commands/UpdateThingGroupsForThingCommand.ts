import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient.ts";
import { UpdateThingGroupsForThingRequest, UpdateThingGroupsForThingResponse } from "../models/models_2.ts";
import {
  deserializeAws_restJson1UpdateThingGroupsForThingCommand,
  serializeAws_restJson1UpdateThingGroupsForThingCommand,
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

export interface UpdateThingGroupsForThingCommandInput extends UpdateThingGroupsForThingRequest {}
export interface UpdateThingGroupsForThingCommandOutput extends UpdateThingGroupsForThingResponse, __MetadataBearer {}

/**
 * <p>Updates the groups to which the thing belongs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateThingGroupsForThingCommand } from "../../client-iot/mod.ts";
 * // const { IoTClient, UpdateThingGroupsForThingCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new UpdateThingGroupsForThingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateThingGroupsForThingCommandInput} for command's `input` shape.
 * @see {@link UpdateThingGroupsForThingCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateThingGroupsForThingCommand extends $Command<
  UpdateThingGroupsForThingCommandInput,
  UpdateThingGroupsForThingCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateThingGroupsForThingCommandInput) {
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
  ): Handler<UpdateThingGroupsForThingCommandInput, UpdateThingGroupsForThingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "UpdateThingGroupsForThingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateThingGroupsForThingRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateThingGroupsForThingResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateThingGroupsForThingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateThingGroupsForThingCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateThingGroupsForThingCommandOutput> {
    return deserializeAws_restJson1UpdateThingGroupsForThingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
