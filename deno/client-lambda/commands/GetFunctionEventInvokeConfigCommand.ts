import {
  LambdaClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../LambdaClient.ts";
import {
  FunctionEventInvokeConfig,
  GetFunctionEventInvokeConfigRequest
} from "../models/index.ts";
import {
  deserializeAws_restJson1GetFunctionEventInvokeConfigCommand,
  serializeAws_restJson1GetFunctionEventInvokeConfigCommand
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

export type GetFunctionEventInvokeConfigCommandInput = GetFunctionEventInvokeConfigRequest;
export type GetFunctionEventInvokeConfigCommandOutput = FunctionEventInvokeConfig &
  __MetadataBearer;

export class GetFunctionEventInvokeConfigCommand extends $Command<
  GetFunctionEventInvokeConfigCommandInput,
  GetFunctionEventInvokeConfigCommandOutput,
  LambdaClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetFunctionEventInvokeConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetFunctionEventInvokeConfigCommandInput,
    GetFunctionEventInvokeConfigCommandOutput
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
    input: GetFunctionEventInvokeConfigCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GetFunctionEventInvokeConfigCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetFunctionEventInvokeConfigCommandOutput> {
    return deserializeAws_restJson1GetFunctionEventInvokeConfigCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
