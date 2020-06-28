import {
  MediaStoreDataClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../MediaStoreDataClient.ts";
import { ListItemsRequest, ListItemsResponse } from "../models/index.ts";
import {
  deserializeAws_restJson1ListItemsCommand,
  serializeAws_restJson1ListItemsCommand
} from "../protocols/Aws_restJson1.ts";
import { getSerdePlugin } from "../../middleware-serde/mod.ts";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "../../protocol-http/mod.ts";
import { Command as $Command } from "../../smithy-client/mod.ts";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext
} from "../../types/mod.ts";

export type ListItemsCommandInput = ListItemsRequest;
export type ListItemsCommandOutput = ListItemsResponse & __MetadataBearer;

export class ListItemsCommand extends $Command<
  ListItemsCommandInput,
  ListItemsCommandOutput,
  MediaStoreDataClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListItemsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaStoreDataClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListItemsCommandInput, ListItemsCommandOutput> {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListItemsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListItemsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListItemsCommandOutput> {
    return deserializeAws_restJson1ListItemsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
