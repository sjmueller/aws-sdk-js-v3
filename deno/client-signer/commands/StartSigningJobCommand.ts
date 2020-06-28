import {
  StartSigningJobRequest,
  StartSigningJobResponse
} from "../models/index.ts";
import {
  deserializeAws_restJson1StartSigningJobCommand,
  serializeAws_restJson1StartSigningJobCommand
} from "../protocols/Aws_restJson1.ts";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  signerClientResolvedConfig
} from "../signerClient.ts";
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

export type StartSigningJobCommandInput = StartSigningJobRequest;
export type StartSigningJobCommandOutput = StartSigningJobResponse &
  __MetadataBearer;

export class StartSigningJobCommand extends $Command<
  StartSigningJobCommandInput,
  StartSigningJobCommandOutput,
  signerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartSigningJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: signerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartSigningJobCommandInput, StartSigningJobCommandOutput> {
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
    input: StartSigningJobCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1StartSigningJobCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartSigningJobCommandOutput> {
    return deserializeAws_restJson1StartSigningJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
