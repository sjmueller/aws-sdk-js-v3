import {
  InspectorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../InspectorClient.ts";
import { DeleteAssessmentTargetRequest } from "../models/index.ts";
import {
  deserializeAws_json1_1DeleteAssessmentTargetCommand,
  serializeAws_json1_1DeleteAssessmentTargetCommand
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

export type DeleteAssessmentTargetCommandInput = DeleteAssessmentTargetRequest;
export type DeleteAssessmentTargetCommandOutput = __MetadataBearer;

export class DeleteAssessmentTargetCommand extends $Command<
  DeleteAssessmentTargetCommandInput,
  DeleteAssessmentTargetCommandOutput,
  InspectorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteAssessmentTargetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: InspectorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DeleteAssessmentTargetCommandInput,
    DeleteAssessmentTargetCommandOutput
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
    input: DeleteAssessmentTargetCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteAssessmentTargetCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteAssessmentTargetCommandOutput> {
    return deserializeAws_json1_1DeleteAssessmentTargetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
