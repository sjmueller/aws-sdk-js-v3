import { DeleteDiscovererRequest } from "../models/index.ts";
import {
  deserializeAws_restJson1DeleteDiscovererCommand,
  serializeAws_restJson1DeleteDiscovererCommand
} from "../protocols/Aws_restJson1.ts";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  schemasClientResolvedConfig
} from "../schemasClient.ts";
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

export type DeleteDiscovererCommandInput = DeleteDiscovererRequest;
export type DeleteDiscovererCommandOutput = __MetadataBearer;

export class DeleteDiscovererCommand extends $Command<
  DeleteDiscovererCommandInput,
  DeleteDiscovererCommandOutput,
  schemasClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteDiscovererCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: schemasClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteDiscovererCommandInput, DeleteDiscovererCommandOutput> {
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
    input: DeleteDiscovererCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteDiscovererCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteDiscovererCommandOutput> {
    return deserializeAws_restJson1DeleteDiscovererCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
