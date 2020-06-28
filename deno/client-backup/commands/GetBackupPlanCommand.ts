import {
  BackupClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../BackupClient.ts";
import { GetBackupPlanInput, GetBackupPlanOutput } from "../models/index.ts";
import {
  deserializeAws_restJson1GetBackupPlanCommand,
  serializeAws_restJson1GetBackupPlanCommand
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

export type GetBackupPlanCommandInput = GetBackupPlanInput;
export type GetBackupPlanCommandOutput = GetBackupPlanOutput & __MetadataBearer;

export class GetBackupPlanCommand extends $Command<
  GetBackupPlanCommandInput,
  GetBackupPlanCommandOutput,
  BackupClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetBackupPlanCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BackupClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetBackupPlanCommandInput, GetBackupPlanCommandOutput> {
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
    input: GetBackupPlanCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GetBackupPlanCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetBackupPlanCommandOutput> {
    return deserializeAws_restJson1GetBackupPlanCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
