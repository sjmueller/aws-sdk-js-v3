import {
  CloudDirectoryClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../CloudDirectoryClient.ts";
import {
  EnableDirectoryRequest,
  EnableDirectoryResponse
} from "../models/index.ts";
import {
  deserializeAws_restJson1EnableDirectoryCommand,
  serializeAws_restJson1EnableDirectoryCommand
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

export type EnableDirectoryCommandInput = EnableDirectoryRequest;
export type EnableDirectoryCommandOutput = EnableDirectoryResponse &
  __MetadataBearer;

export class EnableDirectoryCommand extends $Command<
  EnableDirectoryCommandInput,
  EnableDirectoryCommandOutput,
  CloudDirectoryClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: EnableDirectoryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudDirectoryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<EnableDirectoryCommandInput, EnableDirectoryCommandOutput> {
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
    input: EnableDirectoryCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1EnableDirectoryCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<EnableDirectoryCommandOutput> {
    return deserializeAws_restJson1EnableDirectoryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
