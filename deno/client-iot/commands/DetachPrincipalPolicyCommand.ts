import {
  IoTClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../IoTClient.ts";
import { DetachPrincipalPolicyRequest } from "../models/index.ts";
import {
  deserializeAws_restJson1DetachPrincipalPolicyCommand,
  serializeAws_restJson1DetachPrincipalPolicyCommand
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

export type DetachPrincipalPolicyCommandInput = DetachPrincipalPolicyRequest;
export type DetachPrincipalPolicyCommandOutput = __MetadataBearer;

export class DetachPrincipalPolicyCommand extends $Command<
  DetachPrincipalPolicyCommandInput,
  DetachPrincipalPolicyCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DetachPrincipalPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DetachPrincipalPolicyCommandInput,
    DetachPrincipalPolicyCommandOutput
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
    input: DetachPrincipalPolicyCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DetachPrincipalPolicyCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DetachPrincipalPolicyCommandOutput> {
    return deserializeAws_restJson1DetachPrincipalPolicyCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
