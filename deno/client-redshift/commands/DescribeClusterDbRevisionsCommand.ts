import {
  RedshiftClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../RedshiftClient.ts";
import {
  ClusterDbRevisionsMessage,
  DescribeClusterDbRevisionsMessage
} from "../models/index.ts";
import {
  deserializeAws_queryDescribeClusterDbRevisionsCommand,
  serializeAws_queryDescribeClusterDbRevisionsCommand
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

export type DescribeClusterDbRevisionsCommandInput = DescribeClusterDbRevisionsMessage;
export type DescribeClusterDbRevisionsCommandOutput = ClusterDbRevisionsMessage &
  __MetadataBearer;

export class DescribeClusterDbRevisionsCommand extends $Command<
  DescribeClusterDbRevisionsCommandInput,
  DescribeClusterDbRevisionsCommandOutput,
  RedshiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeClusterDbRevisionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeClusterDbRevisionsCommandInput,
    DescribeClusterDbRevisionsCommandOutput
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
    input: DescribeClusterDbRevisionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryDescribeClusterDbRevisionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeClusterDbRevisionsCommandOutput> {
    return deserializeAws_queryDescribeClusterDbRevisionsCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
