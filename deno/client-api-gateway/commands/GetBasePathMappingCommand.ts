import {
  APIGatewayClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../APIGatewayClient.ts";
import { BasePathMapping, GetBasePathMappingRequest } from "../models/index.ts";
import {
  deserializeAws_restJson1GetBasePathMappingCommand,
  serializeAws_restJson1GetBasePathMappingCommand
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

export type GetBasePathMappingCommandInput = GetBasePathMappingRequest;
export type GetBasePathMappingCommandOutput = BasePathMapping &
  __MetadataBearer;

export class GetBasePathMappingCommand extends $Command<
  GetBasePathMappingCommandInput,
  GetBasePathMappingCommandOutput,
  APIGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetBasePathMappingCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: APIGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetBasePathMappingCommandInput, GetBasePathMappingCommandOutput> {
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
    input: GetBasePathMappingCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GetBasePathMappingCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetBasePathMappingCommandOutput> {
    return deserializeAws_restJson1GetBasePathMappingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
