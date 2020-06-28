import {
  MarketplaceCatalogClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../MarketplaceCatalogClient.ts";
import {
  ListChangeSetsRequest,
  ListChangeSetsResponse
} from "../models/index.ts";
import {
  deserializeAws_restJson1ListChangeSetsCommand,
  serializeAws_restJson1ListChangeSetsCommand
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

export type ListChangeSetsCommandInput = ListChangeSetsRequest;
export type ListChangeSetsCommandOutput = ListChangeSetsResponse &
  __MetadataBearer;

export class ListChangeSetsCommand extends $Command<
  ListChangeSetsCommandInput,
  ListChangeSetsCommandOutput,
  MarketplaceCatalogClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListChangeSetsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MarketplaceCatalogClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListChangeSetsCommandInput, ListChangeSetsCommandOutput> {
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
    input: ListChangeSetsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListChangeSetsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListChangeSetsCommandOutput> {
    return deserializeAws_restJson1ListChangeSetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
