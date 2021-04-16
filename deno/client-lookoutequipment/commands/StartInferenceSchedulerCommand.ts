import { LookoutEquipmentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutEquipmentClient.ts";
import { StartInferenceSchedulerRequest, StartInferenceSchedulerResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_0StartInferenceSchedulerCommand,
  serializeAws_json1_0StartInferenceSchedulerCommand,
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

export type StartInferenceSchedulerCommandInput = StartInferenceSchedulerRequest;
export type StartInferenceSchedulerCommandOutput = StartInferenceSchedulerResponse & __MetadataBearer;

/**
 * <p>Starts an inference scheduler. </p>
 */
export class StartInferenceSchedulerCommand extends $Command<
  StartInferenceSchedulerCommandInput,
  StartInferenceSchedulerCommandOutput,
  LookoutEquipmentClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartInferenceSchedulerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LookoutEquipmentClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartInferenceSchedulerCommandInput, StartInferenceSchedulerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LookoutEquipmentClient";
    const commandName = "StartInferenceSchedulerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartInferenceSchedulerRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartInferenceSchedulerResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartInferenceSchedulerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0StartInferenceSchedulerCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartInferenceSchedulerCommandOutput> {
    return deserializeAws_json1_0StartInferenceSchedulerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
