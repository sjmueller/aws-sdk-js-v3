import {
  RDSDataClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../RDSDataClient.ts";
import {
  BatchExecuteStatementRequest,
  BatchExecuteStatementResponse
} from "../models/index.ts";
import {
  deserializeAws_restJson1BatchExecuteStatementCommand,
  serializeAws_restJson1BatchExecuteStatementCommand
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

export type BatchExecuteStatementCommandInput = BatchExecuteStatementRequest;
export type BatchExecuteStatementCommandOutput = BatchExecuteStatementResponse &
  __MetadataBearer;

export class BatchExecuteStatementCommand extends $Command<
  BatchExecuteStatementCommandInput,
  BatchExecuteStatementCommandOutput,
  RDSDataClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchExecuteStatementCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSDataClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    BatchExecuteStatementCommandInput,
    BatchExecuteStatementCommandOutput
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
    input: BatchExecuteStatementCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchExecuteStatementCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchExecuteStatementCommandOutput> {
    return deserializeAws_restJson1BatchExecuteStatementCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
