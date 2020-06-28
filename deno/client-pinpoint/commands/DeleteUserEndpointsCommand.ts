import {
  PinpointClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../PinpointClient.ts";
import {
  DeleteUserEndpointsRequest,
  DeleteUserEndpointsResponse
} from "../models/index.ts";
import {
  deserializeAws_restJson1DeleteUserEndpointsCommand,
  serializeAws_restJson1DeleteUserEndpointsCommand
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

export type DeleteUserEndpointsCommandInput = DeleteUserEndpointsRequest;
export type DeleteUserEndpointsCommandOutput = DeleteUserEndpointsResponse &
  __MetadataBearer;

export class DeleteUserEndpointsCommand extends $Command<
  DeleteUserEndpointsCommandInput,
  DeleteUserEndpointsCommandOutput,
  PinpointClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteUserEndpointsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DeleteUserEndpointsCommandInput,
    DeleteUserEndpointsCommandOutput
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
    input: DeleteUserEndpointsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteUserEndpointsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteUserEndpointsCommandOutput> {
    return deserializeAws_restJson1DeleteUserEndpointsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
