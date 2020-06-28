import {
  ServiceInputTypes,
  ServiceOutputTypes,
  WorkDocsClientResolvedConfig
} from "../WorkDocsClient.ts";
import {
  GetFolderPathRequest,
  GetFolderPathResponse
} from "../models/index.ts";
import {
  deserializeAws_restJson1GetFolderPathCommand,
  serializeAws_restJson1GetFolderPathCommand
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

export type GetFolderPathCommandInput = GetFolderPathRequest;
export type GetFolderPathCommandOutput = GetFolderPathResponse &
  __MetadataBearer;

export class GetFolderPathCommand extends $Command<
  GetFolderPathCommandInput,
  GetFolderPathCommandOutput,
  WorkDocsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetFolderPathCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkDocsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetFolderPathCommandInput, GetFolderPathCommandOutput> {
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
    input: GetFolderPathCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GetFolderPathCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetFolderPathCommandOutput> {
    return deserializeAws_restJson1GetFolderPathCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
