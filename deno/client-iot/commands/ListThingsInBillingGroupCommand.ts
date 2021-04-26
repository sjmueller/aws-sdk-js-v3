import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient.ts";
import { ListThingsInBillingGroupRequest, ListThingsInBillingGroupResponse } from "../models/models_1.ts";
import {
  deserializeAws_restJson1ListThingsInBillingGroupCommand,
  serializeAws_restJson1ListThingsInBillingGroupCommand,
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

export interface ListThingsInBillingGroupCommandInput extends ListThingsInBillingGroupRequest {}
export interface ListThingsInBillingGroupCommandOutput extends ListThingsInBillingGroupResponse, __MetadataBearer {}

/**
 * <p>Lists the things you have added to the given billing group.</p>
 */
export class ListThingsInBillingGroupCommand extends $Command<
  ListThingsInBillingGroupCommandInput,
  ListThingsInBillingGroupCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListThingsInBillingGroupCommandInput) {
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
  ): Handler<ListThingsInBillingGroupCommandInput, ListThingsInBillingGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "ListThingsInBillingGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListThingsInBillingGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListThingsInBillingGroupResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListThingsInBillingGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListThingsInBillingGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListThingsInBillingGroupCommandOutput> {
    return deserializeAws_restJson1ListThingsInBillingGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
