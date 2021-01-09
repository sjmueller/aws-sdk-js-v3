import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient.ts";
import { ListJobExecutionsForThingRequest, ListJobExecutionsForThingResponse } from "../models/models_1.ts";
import {
  deserializeAws_restJson1ListJobExecutionsForThingCommand,
  serializeAws_restJson1ListJobExecutionsForThingCommand,
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

export type ListJobExecutionsForThingCommandInput = ListJobExecutionsForThingRequest;
export type ListJobExecutionsForThingCommandOutput = ListJobExecutionsForThingResponse & __MetadataBearer;

/**
 * <p>Lists the job executions for the specified thing.</p>
 */
export class ListJobExecutionsForThingCommand extends $Command<
  ListJobExecutionsForThingCommandInput,
  ListJobExecutionsForThingCommandOutput,
  IoTClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListJobExecutionsForThingCommandInput) {
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
  ): Handler<ListJobExecutionsForThingCommandInput, ListJobExecutionsForThingCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "ListJobExecutionsForThingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListJobExecutionsForThingRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListJobExecutionsForThingResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListJobExecutionsForThingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListJobExecutionsForThingCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListJobExecutionsForThingCommandOutput> {
    return deserializeAws_restJson1ListJobExecutionsForThingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
