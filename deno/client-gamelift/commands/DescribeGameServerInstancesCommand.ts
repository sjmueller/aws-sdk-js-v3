import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient.ts";
import { DescribeGameServerInstancesInput, DescribeGameServerInstancesOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DescribeGameServerInstancesCommand,
  serializeAws_json1_1DescribeGameServerInstancesCommand,
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

export interface DescribeGameServerInstancesCommandInput extends DescribeGameServerInstancesInput {}
export interface DescribeGameServerInstancesCommandOutput extends DescribeGameServerInstancesOutput, __MetadataBearer {}

/**
 * <p>
 *             <b>This operation is used with the GameLift FleetIQ solution and game server groups.</b>
 *          </p>
 *         <p>Retrieves status information about the Amazon EC2 instances associated with a GameLift FleetIQ
 *             game server group. Use this operation to detect when instances are active or not
 *             available to host new game servers. If you are looking for instance configuration
 *             information, call <a>DescribeGameServerGroup</a> or access the corresponding
 *             Auto Scaling group properties.</p>
 *         <p>To request status for all instances in the game server group, provide a game server
 *             group ID only. To request status for specific instances, provide the game server group
 *             ID and one or more instance IDs. Use the pagination parameters to retrieve results in
 *             sequential segments. If successful, a collection of <code>GameServerInstance</code>
 *             objects is returned.
 *
 *         </p>
 *         <p>This operation is not designed to be called with every game server claim request; this
 *             practice can cause you to exceed your API limit, which results in errors. Instead, as a
 *             best practice, cache the results and refresh your cache no more than once every 10
 *             seconds.</p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">GameLift FleetIQ Guide</a>
 *         </p>
 *         <p>
 *             <b>Related actions</b>
 *          </p>
 *                     <p>
 *             <a>CreateGameServerGroup</a> |
 *                     <a>ListGameServerGroups</a> |
 *                     <a>DescribeGameServerGroup</a> |
 *                     <a>UpdateGameServerGroup</a> |
 *                     <a>DeleteGameServerGroup</a> |
 *                     <a>ResumeGameServerGroup</a> |
 *                     <a>SuspendGameServerGroup</a> |
 *                     <a>DescribeGameServerInstances</a> |
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/reference-awssdk-fleetiq.html">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DescribeGameServerInstancesCommand } from "../../client-gamelift/mod.ts";
 * // const { GameLiftClient, DescribeGameServerInstancesCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new DescribeGameServerInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeGameServerInstancesCommandInput} for command's `input` shape.
 * @see {@link DescribeGameServerInstancesCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeGameServerInstancesCommand extends $Command<
  DescribeGameServerInstancesCommandInput,
  DescribeGameServerInstancesCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeGameServerInstancesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GameLiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeGameServerInstancesCommandInput, DescribeGameServerInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "DescribeGameServerInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeGameServerInstancesInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeGameServerInstancesOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeGameServerInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeGameServerInstancesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeGameServerInstancesCommandOutput> {
    return deserializeAws_json1_1DescribeGameServerInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
