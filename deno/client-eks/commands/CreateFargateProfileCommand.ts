import {
  EKSClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../EKSClient.ts";
import {
  CreateFargateProfileRequest,
  CreateFargateProfileResponse
} from "../models/index.ts";
import {
  deserializeAws_restJson1CreateFargateProfileCommand,
  serializeAws_restJson1CreateFargateProfileCommand
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

export type CreateFargateProfileCommandInput = CreateFargateProfileRequest;
export type CreateFargateProfileCommandOutput = CreateFargateProfileResponse &
  __MetadataBearer;

export class CreateFargateProfileCommand extends $Command<
  CreateFargateProfileCommandInput,
  CreateFargateProfileCommandOutput,
  EKSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateFargateProfileCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EKSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    CreateFargateProfileCommandInput,
    CreateFargateProfileCommandOutput
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
    input: CreateFargateProfileCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateFargateProfileCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateFargateProfileCommandOutput> {
    return deserializeAws_restJson1CreateFargateProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
