import {
  GreengrassClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../GreengrassClient.ts";
import {
  CreateFunctionDefinitionRequest,
  CreateFunctionDefinitionResponse
} from "../models/index.ts";
import {
  deserializeAws_restJson1CreateFunctionDefinitionCommand,
  serializeAws_restJson1CreateFunctionDefinitionCommand
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

export type CreateFunctionDefinitionCommandInput = CreateFunctionDefinitionRequest;
export type CreateFunctionDefinitionCommandOutput = CreateFunctionDefinitionResponse &
  __MetadataBearer;

export class CreateFunctionDefinitionCommand extends $Command<
  CreateFunctionDefinitionCommandInput,
  CreateFunctionDefinitionCommandOutput,
  GreengrassClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateFunctionDefinitionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GreengrassClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    CreateFunctionDefinitionCommandInput,
    CreateFunctionDefinitionCommandOutput
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
    input: CreateFunctionDefinitionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateFunctionDefinitionCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateFunctionDefinitionCommandOutput> {
    return deserializeAws_restJson1CreateFunctionDefinitionCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
