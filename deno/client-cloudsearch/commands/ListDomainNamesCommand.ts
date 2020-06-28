import {
  CloudSearchClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../CloudSearchClient.ts";
import { ListDomainNamesResponse } from "../models/index.ts";
import {
  deserializeAws_queryListDomainNamesCommand,
  serializeAws_queryListDomainNamesCommand
} from "../protocols/Aws_query.ts";
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

export type ListDomainNamesCommandInput = {};
export type ListDomainNamesCommandOutput = ListDomainNamesResponse &
  __MetadataBearer;

export class ListDomainNamesCommand extends $Command<
  ListDomainNamesCommandInput,
  ListDomainNamesCommandOutput,
  CloudSearchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListDomainNamesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudSearchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDomainNamesCommandInput, ListDomainNamesCommandOutput> {
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
    input: ListDomainNamesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryListDomainNamesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListDomainNamesCommandOutput> {
    return deserializeAws_queryListDomainNamesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
