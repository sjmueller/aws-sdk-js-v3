import {
  ManagedBlockchainClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../ManagedBlockchainClient.ts";
import { CreateMemberInput, CreateMemberOutput } from "../models/index.ts";
import {
  deserializeAws_restJson1CreateMemberCommand,
  serializeAws_restJson1CreateMemberCommand
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

export type CreateMemberCommandInput = CreateMemberInput;
export type CreateMemberCommandOutput = CreateMemberOutput & __MetadataBearer;

export class CreateMemberCommand extends $Command<
  CreateMemberCommandInput,
  CreateMemberCommandOutput,
  ManagedBlockchainClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateMemberCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ManagedBlockchainClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateMemberCommandInput, CreateMemberCommandOutput> {
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
    input: CreateMemberCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateMemberCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateMemberCommandOutput> {
    return deserializeAws_restJson1CreateMemberCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
