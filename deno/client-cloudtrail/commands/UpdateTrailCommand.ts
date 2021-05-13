import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient.ts";
import { UpdateTrailRequest, UpdateTrailResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1UpdateTrailCommand,
  serializeAws_json1_1UpdateTrailCommand,
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

export interface UpdateTrailCommandInput extends UpdateTrailRequest {}
export interface UpdateTrailCommandOutput extends UpdateTrailResponse, __MetadataBearer {}

/**
 * <p>Updates the settings that specify delivery of log files. Changes to a trail do not require
 *          stopping the CloudTrail service. Use this action to designate an existing bucket for log
 *          delivery. If the existing bucket has previously been a target for CloudTrail log files,
 *          an IAM policy exists for the bucket. <code>UpdateTrail</code> must be called from the
 *          region in which the trail was created; otherwise, an
 *             <code>InvalidHomeRegionException</code> is thrown.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, UpdateTrailCommand } from "../../client-cloudtrail/mod.ts";
 * // const { CloudTrailClient, UpdateTrailCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * const client = new CloudTrailClient(config);
 * const command = new UpdateTrailCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateTrailCommandInput} for command's `input` shape.
 * @see {@link UpdateTrailCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateTrailCommand extends $Command<
  UpdateTrailCommandInput,
  UpdateTrailCommandOutput,
  CloudTrailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateTrailCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudTrailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateTrailCommandInput, UpdateTrailCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudTrailClient";
    const commandName = "UpdateTrailCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateTrailRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateTrailResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateTrailCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateTrailCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateTrailCommandOutput> {
    return deserializeAws_json1_1UpdateTrailCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
