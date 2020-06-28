import {
  CognitoSyncClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../CognitoSyncClient.ts";
import { ListRecordsRequest, ListRecordsResponse } from "../models/index.ts";
import {
  deserializeAws_restJson1ListRecordsCommand,
  serializeAws_restJson1ListRecordsCommand
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

export type ListRecordsCommandInput = ListRecordsRequest;
export type ListRecordsCommandOutput = ListRecordsResponse & __MetadataBearer;

export class ListRecordsCommand extends $Command<
  ListRecordsCommandInput,
  ListRecordsCommandOutput,
  CognitoSyncClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListRecordsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListRecordsCommandInput, ListRecordsCommandOutput> {
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
    input: ListRecordsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListRecordsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListRecordsCommandOutput> {
    return deserializeAws_restJson1ListRecordsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
