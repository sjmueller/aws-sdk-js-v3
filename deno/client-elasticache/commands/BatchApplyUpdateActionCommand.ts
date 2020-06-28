import {
  ElastiCacheClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../ElastiCacheClient.ts";
import {
  BatchApplyUpdateActionMessage,
  UpdateActionResultsMessage
} from "../models/index.ts";
import {
  deserializeAws_queryBatchApplyUpdateActionCommand,
  serializeAws_queryBatchApplyUpdateActionCommand
} from "../protocols/Aws_query.ts";
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

export type BatchApplyUpdateActionCommandInput = BatchApplyUpdateActionMessage;
export type BatchApplyUpdateActionCommandOutput = UpdateActionResultsMessage &
  __MetadataBearer;

export class BatchApplyUpdateActionCommand extends $Command<
  BatchApplyUpdateActionCommandInput,
  BatchApplyUpdateActionCommandOutput,
  ElastiCacheClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchApplyUpdateActionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElastiCacheClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    BatchApplyUpdateActionCommandInput,
    BatchApplyUpdateActionCommandOutput
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
    input: BatchApplyUpdateActionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryBatchApplyUpdateActionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchApplyUpdateActionCommandOutput> {
    return deserializeAws_queryBatchApplyUpdateActionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
