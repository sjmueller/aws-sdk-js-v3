import { SFNClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SFNClient.ts";
import { CreateActivityInput, CreateActivityOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_0CreateActivityCommand,
  serializeAws_json1_0CreateActivityCommand,
} from "../protocols/Aws_json1_0.ts";
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

export interface CreateActivityCommandInput extends CreateActivityInput {}
export interface CreateActivityCommandOutput extends CreateActivityOutput, __MetadataBearer {}

/**
 * <p>Creates an activity. An activity is a task that you write in any programming language and
 *       host on any machine that has access to AWS Step Functions. Activities must poll Step Functions using the
 *         <code>GetActivityTask</code> API action and respond using <code>SendTask*</code> API
 *       actions. This function lets Step Functions know the existence of your activity and returns an
 *       identifier for use in a state machine and when polling from the activity.</p>
 *          <note>
 *             <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p>
 *          </note>
 *          <note>
 *             <p>
 *                <code>CreateActivity</code> is an idempotent API. Subsequent requests won’t create a
 *         duplicate resource if it was already created. <code>CreateActivity</code>'s idempotency
 *         check is based on the activity <code>name</code>. If a following request has different
 *           <code>tags</code> values, Step Functions will ignore these differences and treat it as an
 *         idempotent request of the previous. In this case, <code>tags</code> will not be updated,
 *         even if they are different.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, CreateActivityCommand } from "../../client-sfn/mod.ts";
 * // const { SFNClient, CreateActivityCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * const client = new SFNClient(config);
 * const command = new CreateActivityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateActivityCommandInput} for command's `input` shape.
 * @see {@link CreateActivityCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateActivityCommand extends $Command<
  CreateActivityCommandInput,
  CreateActivityCommandOutput,
  SFNClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateActivityCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SFNClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateActivityCommandInput, CreateActivityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SFNClient";
    const commandName = "CreateActivityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateActivityInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateActivityOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateActivityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0CreateActivityCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateActivityCommandOutput> {
    return deserializeAws_json1_0CreateActivityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
