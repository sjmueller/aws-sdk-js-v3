import {
  ApiGatewayV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../ApiGatewayV2Client.ts";
import {
  CreateIntegrationResponseRequest,
  CreateIntegrationResponseResponse
} from "../models/index.ts";
import {
  deserializeAws_restJson1CreateIntegrationResponseCommand,
  serializeAws_restJson1CreateIntegrationResponseCommand
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

export type CreateIntegrationResponseCommandInput = CreateIntegrationResponseRequest;
export type CreateIntegrationResponseCommandOutput = CreateIntegrationResponseResponse &
  __MetadataBearer;

export class CreateIntegrationResponseCommand extends $Command<
  CreateIntegrationResponseCommandInput,
  CreateIntegrationResponseCommandOutput,
  ApiGatewayV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateIntegrationResponseCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApiGatewayV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    CreateIntegrationResponseCommandInput,
    CreateIntegrationResponseCommandOutput
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
    input: CreateIntegrationResponseCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateIntegrationResponseCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateIntegrationResponseCommandOutput> {
    return deserializeAws_restJson1CreateIntegrationResponseCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
