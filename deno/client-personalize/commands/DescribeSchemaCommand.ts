import {
  PersonalizeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../PersonalizeClient.ts";
import {
  DescribeSchemaRequest,
  DescribeSchemaResponse
} from "../models/index.ts";
import {
  deserializeAws_json1_1DescribeSchemaCommand,
  serializeAws_json1_1DescribeSchemaCommand
} from "../protocols/Aws_json1_1.ts";
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

export type DescribeSchemaCommandInput = DescribeSchemaRequest;
export type DescribeSchemaCommandOutput = DescribeSchemaResponse &
  __MetadataBearer;

export class DescribeSchemaCommand extends $Command<
  DescribeSchemaCommandInput,
  DescribeSchemaCommandOutput,
  PersonalizeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeSchemaCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PersonalizeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeSchemaCommandInput, DescribeSchemaCommandOutput> {
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
    input: DescribeSchemaCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeSchemaCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeSchemaCommandOutput> {
    return deserializeAws_json1_1DescribeSchemaCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
