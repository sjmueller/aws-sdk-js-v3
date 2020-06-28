import {
  AppMeshClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../AppMeshClient.ts";
import { PutMeshPolicyInput, PutMeshPolicyOutput } from "../models/index.ts";
import {
  deserializeAws_restJson1PutMeshPolicyCommand,
  serializeAws_restJson1PutMeshPolicyCommand
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

export type PutMeshPolicyCommandInput = PutMeshPolicyInput;
export type PutMeshPolicyCommandOutput = PutMeshPolicyOutput & __MetadataBearer;

export class PutMeshPolicyCommand extends $Command<
  PutMeshPolicyCommandInput,
  PutMeshPolicyCommandOutput,
  AppMeshClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutMeshPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppMeshClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutMeshPolicyCommandInput, PutMeshPolicyCommandOutput> {
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
    input: PutMeshPolicyCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1PutMeshPolicyCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutMeshPolicyCommandOutput> {
    return deserializeAws_restJson1PutMeshPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
