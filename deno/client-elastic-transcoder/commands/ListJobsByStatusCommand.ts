import {
  ElasticTranscoderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../ElasticTranscoderClient.ts";
import {
  ListJobsByStatusRequest,
  ListJobsByStatusResponse
} from "../models/index.ts";
import {
  deserializeAws_restJson1ListJobsByStatusCommand,
  serializeAws_restJson1ListJobsByStatusCommand
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

export type ListJobsByStatusCommandInput = ListJobsByStatusRequest;
export type ListJobsByStatusCommandOutput = ListJobsByStatusResponse &
  __MetadataBearer;

export class ListJobsByStatusCommand extends $Command<
  ListJobsByStatusCommandInput,
  ListJobsByStatusCommandOutput,
  ElasticTranscoderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListJobsByStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticTranscoderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListJobsByStatusCommandInput, ListJobsByStatusCommandOutput> {
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
    input: ListJobsByStatusCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListJobsByStatusCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListJobsByStatusCommandOutput> {
    return deserializeAws_restJson1ListJobsByStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
