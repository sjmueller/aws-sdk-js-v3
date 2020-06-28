import {
  ElasticLoadBalancingv2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../ElasticLoadBalancingv2Client.ts";
import { ModifyListenerInput, ModifyListenerOutput } from "../models/index.ts";
import {
  deserializeAws_queryModifyListenerCommand,
  serializeAws_queryModifyListenerCommand
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

export type ModifyListenerCommandInput = ModifyListenerInput;
export type ModifyListenerCommandOutput = ModifyListenerOutput &
  __MetadataBearer;

export class ModifyListenerCommand extends $Command<
  ModifyListenerCommandInput,
  ModifyListenerCommandOutput,
  ElasticLoadBalancingv2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyListenerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticLoadBalancingv2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifyListenerCommandInput, ModifyListenerCommandOutput> {
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
    input: ModifyListenerCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryModifyListenerCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyListenerCommandOutput> {
    return deserializeAws_queryModifyListenerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
