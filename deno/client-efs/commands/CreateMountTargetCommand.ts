import {
  EFSClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../EFSClient.ts";
import {
  CreateMountTargetRequest,
  MountTargetDescription
} from "../models/index.ts";
import {
  deserializeAws_restJson1CreateMountTargetCommand,
  serializeAws_restJson1CreateMountTargetCommand
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

export type CreateMountTargetCommandInput = CreateMountTargetRequest;
export type CreateMountTargetCommandOutput = MountTargetDescription &
  __MetadataBearer;

export class CreateMountTargetCommand extends $Command<
  CreateMountTargetCommandInput,
  CreateMountTargetCommandOutput,
  EFSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateMountTargetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EFSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateMountTargetCommandInput, CreateMountTargetCommandOutput> {
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
    input: CreateMountTargetCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateMountTargetCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateMountTargetCommandOutput> {
    return deserializeAws_restJson1CreateMountTargetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
