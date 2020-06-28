import {
  ServiceInputTypes,
  ServiceOutputTypes,
  XRayClientResolvedConfig
} from "../XRayClient.ts";
import { BatchGetTracesRequest, BatchGetTracesResult } from "../models/index.ts";
import {
  deserializeAws_restJson1BatchGetTracesCommand,
  serializeAws_restJson1BatchGetTracesCommand
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

export type BatchGetTracesCommandInput = BatchGetTracesRequest;
export type BatchGetTracesCommandOutput = BatchGetTracesResult &
  __MetadataBearer;

export class BatchGetTracesCommand extends $Command<
  BatchGetTracesCommandInput,
  BatchGetTracesCommandOutput,
  XRayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchGetTracesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: XRayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchGetTracesCommandInput, BatchGetTracesCommandOutput> {
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
    input: BatchGetTracesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchGetTracesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchGetTracesCommandOutput> {
    return deserializeAws_restJson1BatchGetTracesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
