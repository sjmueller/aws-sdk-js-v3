import { PollyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PollyClient.ts";
import { ListSpeechSynthesisTasksInput, ListSpeechSynthesisTasksOutput } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListSpeechSynthesisTasksCommand,
  serializeAws_restJson1ListSpeechSynthesisTasksCommand,
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

export type ListSpeechSynthesisTasksCommandInput = ListSpeechSynthesisTasksInput;
export type ListSpeechSynthesisTasksCommandOutput = ListSpeechSynthesisTasksOutput & __MetadataBearer;

/**
 * <p>Returns a list of SpeechSynthesisTask objects ordered by their creation date. This
 *       operation can filter the tasks by their status, for example, allowing users to list only tasks
 *       that are completed.</p>
 */
export class ListSpeechSynthesisTasksCommand extends $Command<
  ListSpeechSynthesisTasksCommandInput,
  ListSpeechSynthesisTasksCommandOutput,
  PollyClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListSpeechSynthesisTasksCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PollyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSpeechSynthesisTasksCommandInput, ListSpeechSynthesisTasksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PollyClient";
    const commandName = "ListSpeechSynthesisTasksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListSpeechSynthesisTasksInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListSpeechSynthesisTasksOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListSpeechSynthesisTasksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListSpeechSynthesisTasksCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSpeechSynthesisTasksCommandOutput> {
    return deserializeAws_restJson1ListSpeechSynthesisTasksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
