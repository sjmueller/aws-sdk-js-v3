import { DeleteSchemaVersionRequest } from "../models/index.ts";
import {
  deserializeAws_restJson1DeleteSchemaVersionCommand,
  serializeAws_restJson1DeleteSchemaVersionCommand
} from "../protocols/Aws_restJson1.ts";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  schemasClientResolvedConfig
} from "../schemasClient.ts";
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

export type DeleteSchemaVersionCommandInput = DeleteSchemaVersionRequest;
export type DeleteSchemaVersionCommandOutput = __MetadataBearer;

export class DeleteSchemaVersionCommand extends $Command<
  DeleteSchemaVersionCommandInput,
  DeleteSchemaVersionCommandOutput,
  schemasClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteSchemaVersionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: schemasClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DeleteSchemaVersionCommandInput,
    DeleteSchemaVersionCommandOutput
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
    input: DeleteSchemaVersionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteSchemaVersionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteSchemaVersionCommandOutput> {
    return deserializeAws_restJson1DeleteSchemaVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
