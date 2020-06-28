import {
  EKSClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../EKSClient.ts";
import { DeleteClusterRequest, DeleteClusterResponse } from "../models/index.ts";
import {
  deserializeAws_restJson1DeleteClusterCommand,
  serializeAws_restJson1DeleteClusterCommand
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

export type DeleteClusterCommandInput = DeleteClusterRequest;
export type DeleteClusterCommandOutput = DeleteClusterResponse &
  __MetadataBearer;

export class DeleteClusterCommand extends $Command<
  DeleteClusterCommandInput,
  DeleteClusterCommandOutput,
  EKSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteClusterCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EKSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteClusterCommandInput, DeleteClusterCommandOutput> {
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
    input: DeleteClusterCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteClusterCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteClusterCommandOutput> {
    return deserializeAws_restJson1DeleteClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
