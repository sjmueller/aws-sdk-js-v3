import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient.ts";
import { UpdateMaintenanceWindowTargetRequest, UpdateMaintenanceWindowTargetResult } from "../models/models_2.ts";
import {
  deserializeAws_json1_1UpdateMaintenanceWindowTargetCommand,
  serializeAws_json1_1UpdateMaintenanceWindowTargetCommand,
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

export interface UpdateMaintenanceWindowTargetCommandInput extends UpdateMaintenanceWindowTargetRequest {}
export interface UpdateMaintenanceWindowTargetCommandOutput
  extends UpdateMaintenanceWindowTargetResult,
    __MetadataBearer {}

/**
 * <p>Modifies the target of an existing maintenance window. You
 *    can change the following:</p>
 *
 *          <ul>
 *             <li>
 *                <p>Name</p>
 *             </li>
 *             <li>
 *                <p>Description</p>
 *             </li>
 *             <li>
 *                <p>Owner</p>
 *             </li>
 *             <li>
 *                <p>IDs for an ID target</p>
 *             </li>
 *             <li>
 *                <p>Tags for a Tag target</p>
 *             </li>
 *             <li>
 *                <p>From any supported tag type to another. The three supported tag types are ID target, Tag
 *      target, and resource group. For more information, see <a>Target</a>.</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>If a parameter is null, then the corresponding field is not modified.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, UpdateMaintenanceWindowTargetCommand } from "../../client-ssm/mod.ts";
 * // const { SSMClient, UpdateMaintenanceWindowTargetCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new UpdateMaintenanceWindowTargetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateMaintenanceWindowTargetCommandInput} for command's `input` shape.
 * @see {@link UpdateMaintenanceWindowTargetCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateMaintenanceWindowTargetCommand extends $Command<
  UpdateMaintenanceWindowTargetCommandInput,
  UpdateMaintenanceWindowTargetCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateMaintenanceWindowTargetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateMaintenanceWindowTargetCommandInput, UpdateMaintenanceWindowTargetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "UpdateMaintenanceWindowTargetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateMaintenanceWindowTargetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateMaintenanceWindowTargetResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateMaintenanceWindowTargetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateMaintenanceWindowTargetCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateMaintenanceWindowTargetCommandOutput> {
    return deserializeAws_json1_1UpdateMaintenanceWindowTargetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
