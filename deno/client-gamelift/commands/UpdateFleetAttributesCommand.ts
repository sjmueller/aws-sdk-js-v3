import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient.ts";
import { UpdateFleetAttributesInput, UpdateFleetAttributesOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1UpdateFleetAttributesCommand,
  serializeAws_json1_1UpdateFleetAttributesCommand,
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

export type UpdateFleetAttributesCommandInput = UpdateFleetAttributesInput;
export type UpdateFleetAttributesCommandOutput = UpdateFleetAttributesOutput & __MetadataBearer;

/**
 * <p>Updates a fleet's mutable attributes, including game session protection and resource
 *             creation limits.</p>
 *         <p>To update fleet attributes, specify the fleet ID and the property values that you want
 *             to change. </p>
 *         <p>If successful, an updated <code>FleetAttributes</code> object is returned.</p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up GameLift fleets</a>
 *          </p>
 *         <p>
 *             <b>Related actions</b>
 *          </p>
 *                     <p>
 *             <a>CreateFleetLocations</a> |
 *                     <a>UpdateFleetAttributes</a> |
 *                     <a>UpdateFleetCapacity</a> |
 *                     <a>UpdateFleetPortSettings</a> |
 *                     <a>UpdateRuntimeConfiguration</a> |
 *                     <a>StopFleetActions</a> |
 *                     <a>StartFleetActions</a> |
 *                     <a>PutScalingPolicy</a> |
 *                     <a>DeleteFleet</a> |
 *                     <a>DeleteFleetLocations</a> |
 *                     <a>DeleteScalingPolicy</a> |
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 */
export class UpdateFleetAttributesCommand extends $Command<
  UpdateFleetAttributesCommandInput,
  UpdateFleetAttributesCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateFleetAttributesCommandInput) {
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
  ): Handler<UpdateFleetAttributesCommandInput, UpdateFleetAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "UpdateFleetAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateFleetAttributesInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateFleetAttributesOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateFleetAttributesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateFleetAttributesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateFleetAttributesCommandOutput> {
    return deserializeAws_json1_1UpdateFleetAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
