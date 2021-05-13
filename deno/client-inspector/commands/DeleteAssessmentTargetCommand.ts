import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient.ts";
import { DeleteAssessmentTargetRequest } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DeleteAssessmentTargetCommand,
  serializeAws_json1_1DeleteAssessmentTargetCommand,
} from "../protocols/Aws_json1_1.ts";
import { getSerdePlugin } from "../../middleware-serde/mod.ts";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "../../protocol-http/mod.ts";
import { Command as $Command } from "../../smithy-client/mod.ts";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "../../types/mod.ts";

export interface DeleteAssessmentTargetCommandInput extends DeleteAssessmentTargetRequest {}
export interface DeleteAssessmentTargetCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the assessment target that is specified by the ARN of the assessment
 *          target.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, DeleteAssessmentTargetCommand } from "../../client-inspector/mod.ts";
 * // const { InspectorClient, DeleteAssessmentTargetCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const command = new DeleteAssessmentTargetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAssessmentTargetCommandInput} for command's `input` shape.
 * @see {@link DeleteAssessmentTargetCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
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

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: InspectorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteAssessmentTargetCommandInput, DeleteAssessmentTargetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "InspectorClient";
    const commandName = "DeleteAssessmentTargetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteAssessmentTargetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteAssessmentTargetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteAssessmentTargetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteAssessmentTargetCommandOutput> {
    return deserializeAws_json1_1DeleteAssessmentTargetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
