import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../EC2Client.ts";
import {
  CreateFpgaImageRequest,
  CreateFpgaImageResult
} from "../models/index.ts";
import {
  deserializeAws_ec2CreateFpgaImageCommand,
  serializeAws_ec2CreateFpgaImageCommand
} from "../protocols/Aws_ec2.ts";
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

export type CreateFpgaImageCommandInput = CreateFpgaImageRequest;
export type CreateFpgaImageCommandOutput = CreateFpgaImageResult &
  __MetadataBearer;

export class CreateFpgaImageCommand extends $Command<
  CreateFpgaImageCommandInput,
  CreateFpgaImageCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateFpgaImageCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateFpgaImageCommandInput, CreateFpgaImageCommandOutput> {
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
    input: CreateFpgaImageCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2CreateFpgaImageCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateFpgaImageCommandOutput> {
    return deserializeAws_ec2CreateFpgaImageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
