import {
  ECSClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../ECSClient.ts";
import {
  SubmitContainerStateChangeRequest,
  SubmitContainerStateChangeResponse
} from "../models/index.ts";
import {
  deserializeAws_json1_1SubmitContainerStateChangeCommand,
  serializeAws_json1_1SubmitContainerStateChangeCommand
} from "../protocols/Aws_json1_1.ts";
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

export type SubmitContainerStateChangeCommandInput = SubmitContainerStateChangeRequest;
export type SubmitContainerStateChangeCommandOutput = SubmitContainerStateChangeResponse &
  __MetadataBearer;

export class SubmitContainerStateChangeCommand extends $Command<
  SubmitContainerStateChangeCommandInput,
  SubmitContainerStateChangeCommandOutput,
  ECSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SubmitContainerStateChangeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    SubmitContainerStateChangeCommandInput,
    SubmitContainerStateChangeCommandOutput
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
    input: SubmitContainerStateChangeCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1SubmitContainerStateChangeCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<SubmitContainerStateChangeCommandOutput> {
    return deserializeAws_json1_1SubmitContainerStateChangeCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
