import {
  AmplifyClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../AmplifyClient.ts";
import {
  CreateBackendEnvironmentRequest,
  CreateBackendEnvironmentResult
} from "../models/index.ts";
import {
  deserializeAws_restJson1CreateBackendEnvironmentCommand,
  serializeAws_restJson1CreateBackendEnvironmentCommand
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

export type CreateBackendEnvironmentCommandInput = CreateBackendEnvironmentRequest;
export type CreateBackendEnvironmentCommandOutput = CreateBackendEnvironmentResult &
  __MetadataBearer;

export class CreateBackendEnvironmentCommand extends $Command<
  CreateBackendEnvironmentCommandInput,
  CreateBackendEnvironmentCommandOutput,
  AmplifyClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateBackendEnvironmentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AmplifyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    CreateBackendEnvironmentCommandInput,
    CreateBackendEnvironmentCommandOutput
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
    input: CreateBackendEnvironmentCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateBackendEnvironmentCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateBackendEnvironmentCommandOutput> {
    return deserializeAws_restJson1CreateBackendEnvironmentCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
