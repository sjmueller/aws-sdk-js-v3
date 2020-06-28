import {
  BackupClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../BackupClient.ts";
import { ListBackupPlansInput, ListBackupPlansOutput } from "../models/index.ts";
import {
  deserializeAws_restJson1ListBackupPlansCommand,
  serializeAws_restJson1ListBackupPlansCommand
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

export type ListBackupPlansCommandInput = ListBackupPlansInput;
export type ListBackupPlansCommandOutput = ListBackupPlansOutput &
  __MetadataBearer;

export class ListBackupPlansCommand extends $Command<
  ListBackupPlansCommandInput,
  ListBackupPlansCommandOutput,
  BackupClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListBackupPlansCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BackupClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListBackupPlansCommandInput, ListBackupPlansCommandOutput> {
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
    input: ListBackupPlansCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListBackupPlansCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListBackupPlansCommandOutput> {
    return deserializeAws_restJson1ListBackupPlansCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
