import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient.ts";
import { StartEntitiesDetectionJobRequest, StartEntitiesDetectionJobResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1StartEntitiesDetectionJobCommand,
  serializeAws_json1_1StartEntitiesDetectionJobCommand,
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

export interface StartEntitiesDetectionJobCommandInput extends StartEntitiesDetectionJobRequest {}
export interface StartEntitiesDetectionJobCommandOutput extends StartEntitiesDetectionJobResponse, __MetadataBearer {}

/**
 * <p>Starts an asynchronous entity detection job for a collection of documents. Use the  operation to track the status of a job.</p>
 *          <p>This API can be used for either standard entity detection or custom entity recognition. In
 *       order to be used for custom entity recognition, the optional <code>EntityRecognizerArn</code>
 *       must be used in order to provide access to the recognizer being used to detect the custom
 *       entity.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, StartEntitiesDetectionJobCommand } from "../../client-comprehend/mod.ts";
 * // const { ComprehendClient, StartEntitiesDetectionJobCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const command = new StartEntitiesDetectionJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartEntitiesDetectionJobCommandInput} for command's `input` shape.
 * @see {@link StartEntitiesDetectionJobCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class StartEntitiesDetectionJobCommand extends $Command<
  StartEntitiesDetectionJobCommandInput,
  StartEntitiesDetectionJobCommandOutput,
  ComprehendClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartEntitiesDetectionJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ComprehendClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartEntitiesDetectionJobCommandInput, StartEntitiesDetectionJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendClient";
    const commandName = "StartEntitiesDetectionJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartEntitiesDetectionJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartEntitiesDetectionJobResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartEntitiesDetectionJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartEntitiesDetectionJobCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartEntitiesDetectionJobCommandOutput> {
    return deserializeAws_json1_1StartEntitiesDetectionJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
