import {
  CloudWatchClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../CloudWatchClient.ts";
import { GetMetricDataInput, GetMetricDataOutput } from "../models/index.ts";
import {
  deserializeAws_queryGetMetricDataCommand,
  serializeAws_queryGetMetricDataCommand
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

export type GetMetricDataCommandInput = GetMetricDataInput;
export type GetMetricDataCommandOutput = GetMetricDataOutput & __MetadataBearer;

export class GetMetricDataCommand extends $Command<
  GetMetricDataCommandInput,
  GetMetricDataCommandOutput,
  CloudWatchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetMetricDataCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetMetricDataCommandInput, GetMetricDataCommandOutput> {
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
    input: GetMetricDataCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryGetMetricDataCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetMetricDataCommandOutput> {
    return deserializeAws_queryGetMetricDataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
