import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient.ts";
import { CreateTaskSetRequest, CreateTaskSetResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1CreateTaskSetCommand,
  serializeAws_json1_1CreateTaskSetCommand,
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

export interface CreateTaskSetCommandInput extends CreateTaskSetRequest {}
export interface CreateTaskSetCommandOutput extends CreateTaskSetResponse, __MetadataBearer {}

/**
 * <p>Create a task set in the specified cluster and service. This is used when a service
 * 			uses the <code>EXTERNAL</code> deployment controller type. For more information, see
 * 				<a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS Deployment
 * 				Types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 */
export class CreateTaskSetCommand extends $Command<
  CreateTaskSetCommandInput,
  CreateTaskSetCommandOutput,
  ECSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateTaskSetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateTaskSetCommandInput, CreateTaskSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "CreateTaskSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateTaskSetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateTaskSetResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateTaskSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateTaskSetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateTaskSetCommandOutput> {
    return deserializeAws_json1_1CreateTaskSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
