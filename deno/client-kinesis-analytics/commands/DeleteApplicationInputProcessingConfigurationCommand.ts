import { KinesisAnalyticsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisAnalyticsClient.ts";
import {
  DeleteApplicationInputProcessingConfigurationRequest,
  DeleteApplicationInputProcessingConfigurationResponse,
} from "../models/models_0.ts";
import {
  deserializeAws_json1_1DeleteApplicationInputProcessingConfigurationCommand,
  serializeAws_json1_1DeleteApplicationInputProcessingConfigurationCommand,
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

export interface DeleteApplicationInputProcessingConfigurationCommandInput
  extends DeleteApplicationInputProcessingConfigurationRequest {}
export interface DeleteApplicationInputProcessingConfigurationCommandOutput
  extends DeleteApplicationInputProcessingConfigurationResponse,
    __MetadataBearer {}

/**
 * <note>
 *             <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p>
 *          </note>
 *         <p>Deletes an <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputProcessingConfiguration.html">InputProcessingConfiguration</a> from an input.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsClient, DeleteApplicationInputProcessingConfigurationCommand } from "../../client-kinesis-analytics/mod.ts";
 * // const { KinesisAnalyticsClient, DeleteApplicationInputProcessingConfigurationCommand } = require("@aws-sdk/client-kinesis-analytics"); // CommonJS import
 * const client = new KinesisAnalyticsClient(config);
 * const command = new DeleteApplicationInputProcessingConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteApplicationInputProcessingConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteApplicationInputProcessingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteApplicationInputProcessingConfigurationCommand extends $Command<
  DeleteApplicationInputProcessingConfigurationCommandInput,
  DeleteApplicationInputProcessingConfigurationCommandOutput,
  KinesisAnalyticsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteApplicationInputProcessingConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisAnalyticsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DeleteApplicationInputProcessingConfigurationCommandInput,
    DeleteApplicationInputProcessingConfigurationCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisAnalyticsClient";
    const commandName = "DeleteApplicationInputProcessingConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteApplicationInputProcessingConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteApplicationInputProcessingConfigurationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteApplicationInputProcessingConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteApplicationInputProcessingConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteApplicationInputProcessingConfigurationCommandOutput> {
    return deserializeAws_json1_1DeleteApplicationInputProcessingConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
