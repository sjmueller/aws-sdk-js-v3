import { HealthLakeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HealthLakeClient.ts";
import { StartFHIRExportJobRequest, StartFHIRExportJobResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_0StartFHIRExportJobCommand,
  serializeAws_json1_0StartFHIRExportJobCommand,
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

export interface StartFHIRExportJobCommandInput extends StartFHIRExportJobRequest {}
export interface StartFHIRExportJobCommandOutput extends StartFHIRExportJobResponse, __MetadataBearer {}

/**
 * <p>Begins a FHIR export job.</p>
 */
export class StartFHIRExportJobCommand extends $Command<
  StartFHIRExportJobCommandInput,
  StartFHIRExportJobCommandOutput,
  HealthLakeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartFHIRExportJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: HealthLakeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartFHIRExportJobCommandInput, StartFHIRExportJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "HealthLakeClient";
    const commandName = "StartFHIRExportJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartFHIRExportJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartFHIRExportJobResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartFHIRExportJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0StartFHIRExportJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartFHIRExportJobCommandOutput> {
    return deserializeAws_json1_0StartFHIRExportJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
