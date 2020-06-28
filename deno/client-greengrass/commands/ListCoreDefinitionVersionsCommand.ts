import {
  GreengrassClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../GreengrassClient.ts";
import {
  ListCoreDefinitionVersionsRequest,
  ListCoreDefinitionVersionsResponse
} from "../models/index.ts";
import {
  deserializeAws_restJson1ListCoreDefinitionVersionsCommand,
  serializeAws_restJson1ListCoreDefinitionVersionsCommand
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

export type ListCoreDefinitionVersionsCommandInput = ListCoreDefinitionVersionsRequest;
export type ListCoreDefinitionVersionsCommandOutput = ListCoreDefinitionVersionsResponse &
  __MetadataBearer;

export class ListCoreDefinitionVersionsCommand extends $Command<
  ListCoreDefinitionVersionsCommandInput,
  ListCoreDefinitionVersionsCommandOutput,
  GreengrassClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListCoreDefinitionVersionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GreengrassClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ListCoreDefinitionVersionsCommandInput,
    ListCoreDefinitionVersionsCommandOutput
  > {
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
    input: ListCoreDefinitionVersionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListCoreDefinitionVersionsCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListCoreDefinitionVersionsCommandOutput> {
    return deserializeAws_restJson1ListCoreDefinitionVersionsCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
