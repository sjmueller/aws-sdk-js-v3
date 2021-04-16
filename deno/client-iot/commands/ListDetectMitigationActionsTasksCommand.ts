import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient.ts";
import { ListDetectMitigationActionsTasksRequest, ListDetectMitigationActionsTasksResponse } from "../models/models_1.ts";
import {
  deserializeAws_restJson1ListDetectMitigationActionsTasksCommand,
  serializeAws_restJson1ListDetectMitigationActionsTasksCommand,
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

export type ListDetectMitigationActionsTasksCommandInput = ListDetectMitigationActionsTasksRequest;
export type ListDetectMitigationActionsTasksCommandOutput = ListDetectMitigationActionsTasksResponse & __MetadataBearer;

/**
 * <p>
 *       List of Device Defender ML Detect mitigation actions tasks.
 *     </p>
 */
export class ListDetectMitigationActionsTasksCommand extends $Command<
  ListDetectMitigationActionsTasksCommandInput,
  ListDetectMitigationActionsTasksCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListDetectMitigationActionsTasksCommandInput) {
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
  ): Handler<ListDetectMitigationActionsTasksCommandInput, ListDetectMitigationActionsTasksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "ListDetectMitigationActionsTasksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListDetectMitigationActionsTasksRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListDetectMitigationActionsTasksResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListDetectMitigationActionsTasksCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListDetectMitigationActionsTasksCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListDetectMitigationActionsTasksCommandOutput> {
    return deserializeAws_restJson1ListDetectMitigationActionsTasksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
