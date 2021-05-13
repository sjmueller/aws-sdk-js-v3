import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient.ts";
import { ListMonitoringExecutionsRequest, ListMonitoringExecutionsResponse } from "../models/models_2.ts";
import {
  deserializeAws_json1_1ListMonitoringExecutionsCommand,
  serializeAws_json1_1ListMonitoringExecutionsCommand,
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

export interface ListMonitoringExecutionsCommandInput extends ListMonitoringExecutionsRequest {}
export interface ListMonitoringExecutionsCommandOutput extends ListMonitoringExecutionsResponse, __MetadataBearer {}

/**
 * <p>Returns list of all monitoring job executions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListMonitoringExecutionsCommand } from "../../client-sagemaker/mod.ts";
 * // const { SageMakerClient, ListMonitoringExecutionsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListMonitoringExecutionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListMonitoringExecutionsCommandInput} for command's `input` shape.
 * @see {@link ListMonitoringExecutionsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListMonitoringExecutionsCommand extends $Command<
  ListMonitoringExecutionsCommandInput,
  ListMonitoringExecutionsCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListMonitoringExecutionsCommandInput) {
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
  ): Handler<ListMonitoringExecutionsCommandInput, ListMonitoringExecutionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "ListMonitoringExecutionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListMonitoringExecutionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListMonitoringExecutionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListMonitoringExecutionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListMonitoringExecutionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListMonitoringExecutionsCommandOutput> {
    return deserializeAws_json1_1ListMonitoringExecutionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
