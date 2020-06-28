import {
  RDSClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../RDSClient.ts";
import {
  DeleteDBClusterMessage,
  DeleteDBClusterResult
} from "../models/index.ts";
import {
  deserializeAws_queryDeleteDBClusterCommand,
  serializeAws_queryDeleteDBClusterCommand
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

export type DeleteDBClusterCommandInput = DeleteDBClusterMessage;
export type DeleteDBClusterCommandOutput = DeleteDBClusterResult &
  __MetadataBearer;

export class DeleteDBClusterCommand extends $Command<
  DeleteDBClusterCommandInput,
  DeleteDBClusterCommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteDBClusterCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteDBClusterCommandInput, DeleteDBClusterCommandOutput> {
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
    input: DeleteDBClusterCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryDeleteDBClusterCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteDBClusterCommandOutput> {
    return deserializeAws_queryDeleteDBClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
