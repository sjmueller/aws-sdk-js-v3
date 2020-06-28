import {
  CodeCommitClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../CodeCommitClient.ts";
import {
  PutRepositoryTriggersInput,
  PutRepositoryTriggersOutput
} from "../models/index.ts";
import {
  deserializeAws_json1_1PutRepositoryTriggersCommand,
  serializeAws_json1_1PutRepositoryTriggersCommand
} from "../protocols/Aws_json1_1.ts";
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

export type PutRepositoryTriggersCommandInput = PutRepositoryTriggersInput;
export type PutRepositoryTriggersCommandOutput = PutRepositoryTriggersOutput &
  __MetadataBearer;

export class PutRepositoryTriggersCommand extends $Command<
  PutRepositoryTriggersCommandInput,
  PutRepositoryTriggersCommandOutput,
  CodeCommitClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutRepositoryTriggersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeCommitClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    PutRepositoryTriggersCommandInput,
    PutRepositoryTriggersCommandOutput
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
    input: PutRepositoryTriggersCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1PutRepositoryTriggersCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutRepositoryTriggersCommandOutput> {
    return deserializeAws_json1_1PutRepositoryTriggersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
