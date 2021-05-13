import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient.ts";
import { DeleteFlowDefinitionRequest, DeleteFlowDefinitionResponse } from "../models/models_1.ts";
import {
  deserializeAws_json1_1DeleteFlowDefinitionCommand,
  serializeAws_json1_1DeleteFlowDefinitionCommand,
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

export interface DeleteFlowDefinitionCommandInput extends DeleteFlowDefinitionRequest {}
export interface DeleteFlowDefinitionCommandOutput extends DeleteFlowDefinitionResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified flow definition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteFlowDefinitionCommand } from "../../client-sagemaker/mod.ts";
 * // const { SageMakerClient, DeleteFlowDefinitionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DeleteFlowDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteFlowDefinitionCommandInput} for command's `input` shape.
 * @see {@link DeleteFlowDefinitionCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteFlowDefinitionCommand extends $Command<
  DeleteFlowDefinitionCommandInput,
  DeleteFlowDefinitionCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteFlowDefinitionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteFlowDefinitionCommandInput, DeleteFlowDefinitionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "DeleteFlowDefinitionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteFlowDefinitionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteFlowDefinitionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteFlowDefinitionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteFlowDefinitionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteFlowDefinitionCommandOutput> {
    return deserializeAws_json1_1DeleteFlowDefinitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
