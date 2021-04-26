import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient.ts";
import { ListThingsInThingGroupRequest, ListThingsInThingGroupResponse } from "../models/models_1.ts";
import {
  deserializeAws_restJson1ListThingsInThingGroupCommand,
  serializeAws_restJson1ListThingsInThingGroupCommand,
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

export interface ListThingsInThingGroupCommandInput extends ListThingsInThingGroupRequest {}
export interface ListThingsInThingGroupCommandOutput extends ListThingsInThingGroupResponse, __MetadataBearer {}

/**
 * <p>Lists the things in the specified group.</p>
 */
export class ListThingsInThingGroupCommand extends $Command<
  ListThingsInThingGroupCommandInput,
  ListThingsInThingGroupCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListThingsInThingGroupCommandInput) {
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
  ): Handler<ListThingsInThingGroupCommandInput, ListThingsInThingGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "ListThingsInThingGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListThingsInThingGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListThingsInThingGroupResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListThingsInThingGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListThingsInThingGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListThingsInThingGroupCommandOutput> {
    return deserializeAws_restJson1ListThingsInThingGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
