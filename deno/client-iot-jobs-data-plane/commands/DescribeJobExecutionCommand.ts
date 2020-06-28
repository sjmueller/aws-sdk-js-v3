import {
  IoTJobsDataPlaneClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../IoTJobsDataPlaneClient.ts";
import {
  DescribeJobExecutionRequest,
  DescribeJobExecutionResponse
} from "../models/index.ts";
import {
  deserializeAws_restJson1DescribeJobExecutionCommand,
  serializeAws_restJson1DescribeJobExecutionCommand
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

export type DescribeJobExecutionCommandInput = DescribeJobExecutionRequest;
export type DescribeJobExecutionCommandOutput = DescribeJobExecutionResponse &
  __MetadataBearer;

export class DescribeJobExecutionCommand extends $Command<
  DescribeJobExecutionCommandInput,
  DescribeJobExecutionCommandOutput,
  IoTJobsDataPlaneClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeJobExecutionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTJobsDataPlaneClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeJobExecutionCommandInput,
    DescribeJobExecutionCommandOutput
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
    input: DescribeJobExecutionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeJobExecutionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeJobExecutionCommandOutput> {
    return deserializeAws_restJson1DescribeJobExecutionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
