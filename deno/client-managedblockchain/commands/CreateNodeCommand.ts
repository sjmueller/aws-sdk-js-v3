import {
  ManagedBlockchainClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../ManagedBlockchainClient.ts";
import { CreateNodeInput, CreateNodeOutput } from "../models/index.ts";
import {
  deserializeAws_restJson1CreateNodeCommand,
  serializeAws_restJson1CreateNodeCommand
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

export type CreateNodeCommandInput = CreateNodeInput;
export type CreateNodeCommandOutput = CreateNodeOutput & __MetadataBearer;

export class CreateNodeCommand extends $Command<
  CreateNodeCommandInput,
  CreateNodeCommandOutput,
  ManagedBlockchainClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateNodeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ManagedBlockchainClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateNodeCommandInput, CreateNodeCommandOutput> {
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
    input: CreateNodeCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateNodeCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateNodeCommandOutput> {
    return deserializeAws_restJson1CreateNodeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
