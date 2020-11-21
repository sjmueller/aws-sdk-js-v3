
import { SQSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SQSClient.ts";
import { ListDeadLetterSourceQueuesRequest, ListDeadLetterSourceQueuesResult } from "../models/models_0.ts";
import {
  deserializeAws_queryListDeadLetterSourceQueuesCommand,
  serializeAws_queryListDeadLetterSourceQueuesCommand,
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

export type ListDeadLetterSourceQueuesCommandInput = ListDeadLetterSourceQueuesRequest;
export type ListDeadLetterSourceQueuesCommandOutput = ListDeadLetterSourceQueuesResult & __MetadataBearer;

export class ListDeadLetterSourceQueuesCommand extends $Command<
  ListDeadLetterSourceQueuesCommandInput,
  ListDeadLetterSourceQueuesCommandOutput,
  SQSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListDeadLetterSourceQueuesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SQSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDeadLetterSourceQueuesCommandInput, ListDeadLetterSourceQueuesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SQSClient";
    const commandName = "ListDeadLetterSourceQueuesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListDeadLetterSourceQueuesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListDeadLetterSourceQueuesResult.filterSensitiveLog,
    };

    if (typeof logger.info === "function") {
      logger.info({
        clientName,
        commandName,
      });
    }

    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListDeadLetterSourceQueuesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryListDeadLetterSourceQueuesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListDeadLetterSourceQueuesCommandOutput> {
    return deserializeAws_queryListDeadLetterSourceQueuesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
