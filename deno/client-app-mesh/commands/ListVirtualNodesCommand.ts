import {
  AppMeshClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../AppMeshClient.ts";
import {
  ListVirtualNodesInput,
  ListVirtualNodesOutput
} from "../models/index.ts";
import {
  deserializeAws_restJson1ListVirtualNodesCommand,
  serializeAws_restJson1ListVirtualNodesCommand
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

export type ListVirtualNodesCommandInput = ListVirtualNodesInput;
export type ListVirtualNodesCommandOutput = ListVirtualNodesOutput &
  __MetadataBearer;

export class ListVirtualNodesCommand extends $Command<
  ListVirtualNodesCommandInput,
  ListVirtualNodesCommandOutput,
  AppMeshClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListVirtualNodesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppMeshClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListVirtualNodesCommandInput, ListVirtualNodesCommandOutput> {
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
    input: ListVirtualNodesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListVirtualNodesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListVirtualNodesCommandOutput> {
    return deserializeAws_restJson1ListVirtualNodesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
