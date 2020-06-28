import {
  BatchClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../BatchClient.ts";
import { UpdateJobQueueRequest, UpdateJobQueueResponse } from "../models/index.ts";
import {
  deserializeAws_restJson1UpdateJobQueueCommand,
  serializeAws_restJson1UpdateJobQueueCommand
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

export type UpdateJobQueueCommandInput = UpdateJobQueueRequest;
export type UpdateJobQueueCommandOutput = UpdateJobQueueResponse &
  __MetadataBearer;

export class UpdateJobQueueCommand extends $Command<
  UpdateJobQueueCommandInput,
  UpdateJobQueueCommandOutput,
  BatchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateJobQueueCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BatchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateJobQueueCommandInput, UpdateJobQueueCommandOutput> {
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
    input: UpdateJobQueueCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateJobQueueCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateJobQueueCommandOutput> {
    return deserializeAws_restJson1UpdateJobQueueCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
