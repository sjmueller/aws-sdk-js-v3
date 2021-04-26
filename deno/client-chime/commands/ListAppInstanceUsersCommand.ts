import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient.ts";
import { ListAppInstanceUsersRequest, ListAppInstanceUsersResponse } from "../models/models_1.ts";
import {
  deserializeAws_restJson1ListAppInstanceUsersCommand,
  serializeAws_restJson1ListAppInstanceUsersCommand,
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

export interface ListAppInstanceUsersCommandInput extends ListAppInstanceUsersRequest {}
export interface ListAppInstanceUsersCommandOutput extends ListAppInstanceUsersResponse, __MetadataBearer {}

/**
 * <p>
 * List all
 * <code>AppInstanceUsers</code>
 * created under a single <code>AppInstance</code>.
 * </p>
 */
export class ListAppInstanceUsersCommand extends $Command<
  ListAppInstanceUsersCommandInput,
  ListAppInstanceUsersCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListAppInstanceUsersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAppInstanceUsersCommandInput, ListAppInstanceUsersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "ListAppInstanceUsersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAppInstanceUsersRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListAppInstanceUsersResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAppInstanceUsersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListAppInstanceUsersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAppInstanceUsersCommandOutput> {
    return deserializeAws_restJson1ListAppInstanceUsersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
