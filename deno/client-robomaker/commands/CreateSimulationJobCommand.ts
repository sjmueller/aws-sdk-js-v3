import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient.ts";
import { CreateSimulationJobRequest, CreateSimulationJobResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1CreateSimulationJobCommand,
  serializeAws_restJson1CreateSimulationJobCommand,
} from "../protocols/Aws_restJson1.ts";
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

export interface CreateSimulationJobCommandInput extends CreateSimulationJobRequest {}
export interface CreateSimulationJobCommandOutput extends CreateSimulationJobResponse, __MetadataBearer {}

/**
 * <p>Creates a simulation job.</p>
 *          <note>
 *             <p>After 90 days, simulation jobs expire and will be deleted. They will no longer be
 *             accessible. </p>
 *          </note>
 */
export class CreateSimulationJobCommand extends $Command<
  CreateSimulationJobCommandInput,
  CreateSimulationJobCommandOutput,
  RoboMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateSimulationJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RoboMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateSimulationJobCommandInput, CreateSimulationJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RoboMakerClient";
    const commandName = "CreateSimulationJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateSimulationJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateSimulationJobResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateSimulationJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateSimulationJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateSimulationJobCommandOutput> {
    return deserializeAws_restJson1CreateSimulationJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
