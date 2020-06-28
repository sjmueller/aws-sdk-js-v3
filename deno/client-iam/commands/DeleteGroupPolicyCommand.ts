import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../IAMClient.ts";
import { DeleteGroupPolicyRequest } from "../models/index.ts";
import {
  deserializeAws_queryDeleteGroupPolicyCommand,
  serializeAws_queryDeleteGroupPolicyCommand
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

export type DeleteGroupPolicyCommandInput = DeleteGroupPolicyRequest;
export type DeleteGroupPolicyCommandOutput = __MetadataBearer;

export class DeleteGroupPolicyCommand extends $Command<
  DeleteGroupPolicyCommandInput,
  DeleteGroupPolicyCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteGroupPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteGroupPolicyCommandInput, DeleteGroupPolicyCommandOutput> {
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
    input: DeleteGroupPolicyCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryDeleteGroupPolicyCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteGroupPolicyCommandOutput> {
    return deserializeAws_queryDeleteGroupPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
