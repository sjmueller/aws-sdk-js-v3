import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient.ts";
import { DescribePlayerSessionsInput, DescribePlayerSessionsOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DescribePlayerSessionsCommand,
  serializeAws_json1_1DescribePlayerSessionsCommand,
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

export type DescribePlayerSessionsCommandInput = DescribePlayerSessionsInput;
export type DescribePlayerSessionsCommandOutput = DescribePlayerSessionsOutput & __MetadataBearer;

/**
 * <p>Retrieves properties for one or more player sessions. </p>
 *         <p>This action can be used in the following ways: </p>
 *         <ul>
 *             <li>
 *                 <p>To retrieve a specific player session, provide the player session ID
 *                     only.</p>
 *             </li>
 *             <li>
 *                 <p>To retrieve all player sessions in a game session, provide the game session ID
 *                     only.</p>
 *             </li>
 *             <li>
 *                 <p>To retrieve all player sessions for a specific player, provide a player ID
 *                     only.</p>
 *             </li>
 *          </ul>
 *          <p>To request player sessions, specify either a player session ID, game session ID, or player
 *             ID. You can filter this request by player session status. Use the pagination parameters
 *             to retrieve results as a set of sequential pages. </p>
 *         <p>If successful, a <code>PlayerSession</code> object is returned for each session that
 *             matches the request.</p>
 *          <p>
 *             <i>Available in Amazon GameLift Local.</i>
 *          </p>
 *          <p>
 *             <b>Related actions</b>
 *          </p>
 *                     <p>
 *             <a>CreatePlayerSession</a> |
 *                     <a>CreatePlayerSessions</a> |
 *                     <a>DescribePlayerSessions</a> |
 *                     <a>StartGameSessionPlacement</a> |
 *                     <a>DescribeGameSessionPlacement</a> |
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 */
export class DescribePlayerSessionsCommand extends $Command<
  DescribePlayerSessionsCommandInput,
  DescribePlayerSessionsCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribePlayerSessionsCommandInput) {
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
  ): Handler<DescribePlayerSessionsCommandInput, DescribePlayerSessionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "DescribePlayerSessionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribePlayerSessionsInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribePlayerSessionsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribePlayerSessionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribePlayerSessionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribePlayerSessionsCommandOutput> {
    return deserializeAws_json1_1DescribePlayerSessionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
