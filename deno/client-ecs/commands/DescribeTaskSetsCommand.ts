import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient.ts";
import { DescribeTaskSetsRequest, DescribeTaskSetsResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DescribeTaskSetsCommand,
  serializeAws_json1_1DescribeTaskSetsCommand,
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

export interface DescribeTaskSetsCommandInput extends DescribeTaskSetsRequest {}
export interface DescribeTaskSetsCommandOutput extends DescribeTaskSetsResponse, __MetadataBearer {}

/**
 * <p>Describes the task sets in the specified cluster and service. This is used when a
 * 			service uses the <code>EXTERNAL</code> deployment controller type. For more information,
 * 			see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS Deployment
 * 				Types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 */
export class DescribeTaskSetsCommand extends $Command<
  DescribeTaskSetsCommandInput,
  DescribeTaskSetsCommandOutput,
  ECSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeTaskSetsCommandInput) {
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
  ): Handler<DescribeTaskSetsCommandInput, DescribeTaskSetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "DescribeTaskSetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeTaskSetsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeTaskSetsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeTaskSetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeTaskSetsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeTaskSetsCommandOutput> {
    return deserializeAws_json1_1DescribeTaskSetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
