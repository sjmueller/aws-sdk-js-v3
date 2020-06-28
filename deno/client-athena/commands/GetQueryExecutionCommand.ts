import {
  AthenaClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../AthenaClient.ts";
import {
  GetQueryExecutionInput,
  GetQueryExecutionOutput
} from "../models/index.ts";
import {
  deserializeAws_json1_1GetQueryExecutionCommand,
  serializeAws_json1_1GetQueryExecutionCommand
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

export type GetQueryExecutionCommandInput = GetQueryExecutionInput;
export type GetQueryExecutionCommandOutput = GetQueryExecutionOutput &
  __MetadataBearer;

export class GetQueryExecutionCommand extends $Command<
  GetQueryExecutionCommandInput,
  GetQueryExecutionCommandOutput,
  AthenaClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetQueryExecutionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AthenaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetQueryExecutionCommandInput, GetQueryExecutionCommandOutput> {
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
    input: GetQueryExecutionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GetQueryExecutionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetQueryExecutionCommandOutput> {
    return deserializeAws_json1_1GetQueryExecutionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
