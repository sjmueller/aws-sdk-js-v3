import {
  DescribeDiscovererRequest,
  DescribeDiscovererResponse
} from "../models/index.ts";
import {
  deserializeAws_restJson1DescribeDiscovererCommand,
  serializeAws_restJson1DescribeDiscovererCommand
} from "../protocols/Aws_restJson1.ts";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  schemasClientResolvedConfig
} from "../schemasClient.ts";
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

export type DescribeDiscovererCommandInput = DescribeDiscovererRequest;
export type DescribeDiscovererCommandOutput = DescribeDiscovererResponse &
  __MetadataBearer;

export class DescribeDiscovererCommand extends $Command<
  DescribeDiscovererCommandInput,
  DescribeDiscovererCommandOutput,
  schemasClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeDiscovererCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: schemasClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeDiscovererCommandInput, DescribeDiscovererCommandOutput> {
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
    input: DescribeDiscovererCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeDiscovererCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeDiscovererCommandOutput> {
    return deserializeAws_restJson1DescribeDiscovererCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
