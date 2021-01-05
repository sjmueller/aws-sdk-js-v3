import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient.ts";
import { ListLambdaFunctionsRequest, ListLambdaFunctionsResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListLambdaFunctionsCommand,
  serializeAws_restJson1ListLambdaFunctionsCommand,
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

export type ListLambdaFunctionsCommandInput = ListLambdaFunctionsRequest;
export type ListLambdaFunctionsCommandOutput = ListLambdaFunctionsResponse & __MetadataBearer;

/**
 * <p>Returns a paginated list of all the Lambda functions that show up in the drop-down options
 *    in the relevant contact flow blocks.</p>
 */
export class ListLambdaFunctionsCommand extends $Command<
  ListLambdaFunctionsCommandInput,
  ListLambdaFunctionsCommandOutput,
  ConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListLambdaFunctionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListLambdaFunctionsCommandInput, ListLambdaFunctionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "ListLambdaFunctionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListLambdaFunctionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListLambdaFunctionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListLambdaFunctionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListLambdaFunctionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListLambdaFunctionsCommandOutput> {
    return deserializeAws_restJson1ListLambdaFunctionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
