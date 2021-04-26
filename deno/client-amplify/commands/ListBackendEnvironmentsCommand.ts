import { AmplifyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyClient.ts";
import { ListBackendEnvironmentsRequest, ListBackendEnvironmentsResult } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListBackendEnvironmentsCommand,
  serializeAws_restJson1ListBackendEnvironmentsCommand,
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

export interface ListBackendEnvironmentsCommandInput extends ListBackendEnvironmentsRequest {}
export interface ListBackendEnvironmentsCommandOutput extends ListBackendEnvironmentsResult, __MetadataBearer {}

/**
 * <p> Lists the backend environments for an Amplify app. </p>
 */
export class ListBackendEnvironmentsCommand extends $Command<
  ListBackendEnvironmentsCommandInput,
  ListBackendEnvironmentsCommandOutput,
  AmplifyClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListBackendEnvironmentsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AmplifyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListBackendEnvironmentsCommandInput, ListBackendEnvironmentsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AmplifyClient";
    const commandName = "ListBackendEnvironmentsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListBackendEnvironmentsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListBackendEnvironmentsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListBackendEnvironmentsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListBackendEnvironmentsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListBackendEnvironmentsCommandOutput> {
    return deserializeAws_restJson1ListBackendEnvironmentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
