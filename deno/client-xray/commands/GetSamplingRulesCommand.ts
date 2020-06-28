import {
  ServiceInputTypes,
  ServiceOutputTypes,
  XRayClientResolvedConfig
} from "../XRayClient.ts";
import {
  GetSamplingRulesRequest,
  GetSamplingRulesResult
} from "../models/index.ts";
import {
  deserializeAws_restJson1GetSamplingRulesCommand,
  serializeAws_restJson1GetSamplingRulesCommand
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

export type GetSamplingRulesCommandInput = GetSamplingRulesRequest;
export type GetSamplingRulesCommandOutput = GetSamplingRulesResult &
  __MetadataBearer;

export class GetSamplingRulesCommand extends $Command<
  GetSamplingRulesCommandInput,
  GetSamplingRulesCommandOutput,
  XRayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetSamplingRulesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: XRayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSamplingRulesCommandInput, GetSamplingRulesCommandOutput> {
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
    input: GetSamplingRulesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GetSamplingRulesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetSamplingRulesCommandOutput> {
    return deserializeAws_restJson1GetSamplingRulesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
