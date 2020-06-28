import {
  ServiceInputTypes,
  ServiceOutputTypes,
  imagebuilderClientResolvedConfig
} from "../imagebuilderClient.ts";
import { GetImagePolicyRequest, GetImagePolicyResponse } from "../models/index.ts";
import {
  deserializeAws_restJson1GetImagePolicyCommand,
  serializeAws_restJson1GetImagePolicyCommand
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

export type GetImagePolicyCommandInput = GetImagePolicyRequest;
export type GetImagePolicyCommandOutput = GetImagePolicyResponse &
  __MetadataBearer;

export class GetImagePolicyCommand extends $Command<
  GetImagePolicyCommandInput,
  GetImagePolicyCommandOutput,
  imagebuilderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetImagePolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: imagebuilderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetImagePolicyCommandInput, GetImagePolicyCommandOutput> {
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
    input: GetImagePolicyCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GetImagePolicyCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetImagePolicyCommandOutput> {
    return deserializeAws_restJson1GetImagePolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
