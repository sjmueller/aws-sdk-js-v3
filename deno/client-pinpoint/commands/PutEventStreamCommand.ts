import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient.ts";
import { PutEventStreamRequest, PutEventStreamResponse } from "../models/models_1.ts";
import {
  deserializeAws_restJson1PutEventStreamCommand,
  serializeAws_restJson1PutEventStreamCommand,
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

export interface PutEventStreamCommandInput extends PutEventStreamRequest {}
export interface PutEventStreamCommandOutput extends PutEventStreamResponse, __MetadataBearer {}

/**
 * <p>Creates a new event stream for an application or updates the settings of an existing event stream for an application.</p>
 */
export class PutEventStreamCommand extends $Command<
  PutEventStreamCommandInput,
  PutEventStreamCommandOutput,
  PinpointClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutEventStreamCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutEventStreamCommandInput, PutEventStreamCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointClient";
    const commandName = "PutEventStreamCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutEventStreamRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutEventStreamResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutEventStreamCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutEventStreamCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutEventStreamCommandOutput> {
    return deserializeAws_restJson1PutEventStreamCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
