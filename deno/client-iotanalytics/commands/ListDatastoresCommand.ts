import { IoTAnalyticsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTAnalyticsClient.ts";
import { ListDatastoresRequest, ListDatastoresResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListDatastoresCommand,
  serializeAws_restJson1ListDatastoresCommand,
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

export interface ListDatastoresCommandInput extends ListDatastoresRequest {}
export interface ListDatastoresCommandOutput extends ListDatastoresResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of data stores.</p>
 */
export class ListDatastoresCommand extends $Command<
  ListDatastoresCommandInput,
  ListDatastoresCommandOutput,
  IoTAnalyticsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListDatastoresCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTAnalyticsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDatastoresCommandInput, ListDatastoresCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTAnalyticsClient";
    const commandName = "ListDatastoresCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListDatastoresRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListDatastoresResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListDatastoresCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListDatastoresCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDatastoresCommandOutput> {
    return deserializeAws_restJson1ListDatastoresCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
