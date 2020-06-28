import {
  ApiGatewayManagementApiClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../ApiGatewayManagementApiClient.ts";
import {
  GetConnectionRequest,
  GetConnectionResponse
} from "../models/index.ts";
import {
  deserializeAws_restJson1GetConnectionCommand,
  serializeAws_restJson1GetConnectionCommand
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

export type GetConnectionCommandInput = GetConnectionRequest;
export type GetConnectionCommandOutput = GetConnectionResponse &
  __MetadataBearer;

export class GetConnectionCommand extends $Command<
  GetConnectionCommandInput,
  GetConnectionCommandOutput,
  ApiGatewayManagementApiClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetConnectionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApiGatewayManagementApiClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetConnectionCommandInput, GetConnectionCommandOutput> {
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
    input: GetConnectionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GetConnectionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetConnectionCommandOutput> {
    return deserializeAws_restJson1GetConnectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
