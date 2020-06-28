import {
  CloudFormationClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../CloudFormationClient.ts";
import {
  DescribeStackEventsInput,
  DescribeStackEventsOutput
} from "../models/index.ts";
import {
  deserializeAws_queryDescribeStackEventsCommand,
  serializeAws_queryDescribeStackEventsCommand
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

export type DescribeStackEventsCommandInput = DescribeStackEventsInput;
export type DescribeStackEventsCommandOutput = DescribeStackEventsOutput &
  __MetadataBearer;

export class DescribeStackEventsCommand extends $Command<
  DescribeStackEventsCommandInput,
  DescribeStackEventsCommandOutput,
  CloudFormationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeStackEventsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeStackEventsCommandInput,
    DescribeStackEventsCommandOutput
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
    input: DescribeStackEventsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryDescribeStackEventsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeStackEventsCommandOutput> {
    return deserializeAws_queryDescribeStackEventsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
