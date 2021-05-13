import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient.ts";
import { PutRetentionConfigurationRequest, PutRetentionConfigurationResponse } from "../models/models_1.ts";
import {
  deserializeAws_json1_1PutRetentionConfigurationCommand,
  serializeAws_json1_1PutRetentionConfigurationCommand,
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

export interface PutRetentionConfigurationCommandInput extends PutRetentionConfigurationRequest {}
export interface PutRetentionConfigurationCommandOutput extends PutRetentionConfigurationResponse, __MetadataBearer {}

/**
 * <p>Creates and updates the retention configuration with details
 * 			about retention period (number of days) that AWS Config stores your
 * 			historical information. The API creates the
 * 				<code>RetentionConfiguration</code> object and names the object
 * 			as <b>default</b>. When you have a
 * 				<code>RetentionConfiguration</code> object named <b>default</b>, calling the API modifies the
 * 			default object. </p>
 * 		       <note>
 * 			         <p>Currently, AWS Config supports only one retention
 * 				configuration per region in your account.</p>
 * 		       </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, PutRetentionConfigurationCommand } from "../../client-config-service/mod.ts";
 * // const { ConfigServiceClient, PutRetentionConfigurationCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new PutRetentionConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutRetentionConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutRetentionConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class PutRetentionConfigurationCommand extends $Command<
  PutRetentionConfigurationCommandInput,
  PutRetentionConfigurationCommandOutput,
  ConfigServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutRetentionConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConfigServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutRetentionConfigurationCommandInput, PutRetentionConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "PutRetentionConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutRetentionConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutRetentionConfigurationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutRetentionConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutRetentionConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutRetentionConfigurationCommandOutput> {
    return deserializeAws_json1_1PutRetentionConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
