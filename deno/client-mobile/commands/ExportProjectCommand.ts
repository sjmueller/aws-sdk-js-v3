import {
  MobileClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../MobileClient.ts";
import { ExportProjectRequest, ExportProjectResult } from "../models/index.ts";
import {
  deserializeAws_restJson1ExportProjectCommand,
  serializeAws_restJson1ExportProjectCommand
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

export type ExportProjectCommandInput = ExportProjectRequest;
export type ExportProjectCommandOutput = ExportProjectResult & __MetadataBearer;

export class ExportProjectCommand extends $Command<
  ExportProjectCommandInput,
  ExportProjectCommandOutput,
  MobileClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ExportProjectCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MobileClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ExportProjectCommandInput, ExportProjectCommandOutput> {
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
    input: ExportProjectCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ExportProjectCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ExportProjectCommandOutput> {
    return deserializeAws_restJson1ExportProjectCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
