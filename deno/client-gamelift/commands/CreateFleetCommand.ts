import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient.ts";
import { CreateFleetInput, CreateFleetOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1CreateFleetCommand,
  serializeAws_json1_1CreateFleetCommand,
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

export interface CreateFleetCommandInput extends CreateFleetInput {}
export interface CreateFleetCommandOutput extends CreateFleetOutput, __MetadataBearer {}

/**
 * <p>Creates a fleet of Amazon Elastic Compute Cloud (Amazon EC2) instances to host your
 *             custom game server or Realtime Servers. Use this operation to configure the computing resources for
 *             your fleet and provide instructions for running game servers on each instance.</p>
 *         <p>Most GameLift fleets can deploy instances to multiple locations, including the home
 *             Region (where the fleet is created) and an optional set of remote locations. Fleets that
 *             are created in the following AWS Regions support multiple locations: us-east-1 (N.
 *             Virginia), us-west-2 (Oregon), eu-central-1 (Frankfurt), eu-west-1 (Ireland),
 *             ap-southeast-2 (Sydney), ap-northeast-1 (Tokyo), and ap-northeast-2 (Seoul). Fleets that
 *             are created in other GameLift Regions can deploy instances in the fleet's home Region
 *             only. All fleet instances use the same configuration regardless of location; however,
 *             you can adjust capacity settings and turn auto-scaling on/off for each location.</p>
 *         <p>To create a fleet, choose the hardware for your instances, specify a game server build
 *             or Realtime script to deploy, and provide a runtime configuration to direct GameLift how
 *             to start and run game servers on each instance in the fleet. Set permissions for inbound
 *             traffic to your game servers, and enable optional features as needed. When creating a
 *             multi-location fleet, provide a list of additional remote locations.</p>
 *
 *         <p>If successful, this operation creates a new Fleet resource and places it in
 *                 <code>NEW</code> status, which prompts GameLift to initiate the <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-creation-workflow.html">fleet creation
 *                 workflow</a>. You can track fleet creation by checking fleet status using <a>DescribeFleetAttributes</a> and <a>DescribeFleetLocationAttributes</a>/, or by monitoring fleet creation events
 *             using <a>DescribeFleetEvents</a>. As soon as the fleet status changes to
 *                 <code>ACTIVE</code>, you can enable automatic scaling for the fleet with <a>PutScalingPolicy</a> and set capacity for the home Region with <a>UpdateFleetCapacity</a>. When the status of each remote location reaches
 *                 <code>ACTIVE</code>, you can set capacity by location using <a>UpdateFleetCapacity</a>.</p>
 *
 *
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up fleets</a>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-creating-debug.html#fleets-creating-debug-creation">Debug fleet creation issues</a>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Multi-location fleets</a>
 *          </p>
 *         <p>
 *             <b>Related actions</b>
 *          </p>
 *                     <p>
 *             <a>CreateFleet</a> |
 *                     <a>UpdateFleetCapacity</a> |
 *                     <a>PutScalingPolicy</a> |
 *                     <a>DescribeEC2InstanceLimits</a> |
 *                     <a>DescribeFleetAttributes</a> |
 *                     <a>DescribeFleetLocationAttributes</a> |
 *                     <a>UpdateFleetAttributes</a> |
 *                     <a>StopFleetActions</a> |
 *                     <a>DeleteFleet</a> |
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, CreateFleetCommand } from "../../client-gamelift/mod.ts";
 * // const { GameLiftClient, CreateFleetCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new CreateFleetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateFleetCommandInput} for command's `input` shape.
 * @see {@link CreateFleetCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateFleetCommand extends $Command<
  CreateFleetCommandInput,
  CreateFleetCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateFleetCommandInput) {
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
  ): Handler<CreateFleetCommandInput, CreateFleetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "CreateFleetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateFleetInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateFleetOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateFleetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateFleetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateFleetCommandOutput> {
    return deserializeAws_json1_1CreateFleetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
