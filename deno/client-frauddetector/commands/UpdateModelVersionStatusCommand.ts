import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient.ts";
import { UpdateModelVersionStatusRequest, UpdateModelVersionStatusResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1UpdateModelVersionStatusCommand,
  serializeAws_json1_1UpdateModelVersionStatusCommand,
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

export interface UpdateModelVersionStatusCommandInput extends UpdateModelVersionStatusRequest {}
export interface UpdateModelVersionStatusCommandOutput extends UpdateModelVersionStatusResult, __MetadataBearer {}

/**
 * <p>Updates the status of a model version.</p>
 *          <p>You can perform the following status updates:</p>
 *          <ol>
 *             <li>
 *                <p>Change the <code>TRAINING_COMPLETE</code> status to <code>ACTIVE</code>.</p>
 *             </li>
 *             <li>
 *                <p>Change <code>ACTIVE</code>to <code>INACTIVE</code>.</p>
 *             </li>
 *          </ol>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, UpdateModelVersionStatusCommand } from "../../client-frauddetector/mod.ts";
 * // const { FraudDetectorClient, UpdateModelVersionStatusCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new UpdateModelVersionStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateModelVersionStatusCommandInput} for command's `input` shape.
 * @see {@link UpdateModelVersionStatusCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateModelVersionStatusCommand extends $Command<
  UpdateModelVersionStatusCommandInput,
  UpdateModelVersionStatusCommandOutput,
  FraudDetectorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateModelVersionStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FraudDetectorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateModelVersionStatusCommandInput, UpdateModelVersionStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FraudDetectorClient";
    const commandName = "UpdateModelVersionStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateModelVersionStatusRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateModelVersionStatusResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateModelVersionStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateModelVersionStatusCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateModelVersionStatusCommandOutput> {
    return deserializeAws_json1_1UpdateModelVersionStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
