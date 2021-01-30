import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient.ts";
import { DetectPiiEntitiesRequest, DetectPiiEntitiesResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DetectPiiEntitiesCommand,
  serializeAws_json1_1DetectPiiEntitiesCommand,
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

export type DetectPiiEntitiesCommandInput = DetectPiiEntitiesRequest;
export type DetectPiiEntitiesCommandOutput = DetectPiiEntitiesResponse & __MetadataBearer;

/**
 * <p>Inspects the input text for entities that contain personally identifiable information
 *       (PII) and returns information about them.</p>
 */
export class DetectPiiEntitiesCommand extends $Command<
  DetectPiiEntitiesCommandInput,
  DetectPiiEntitiesCommandOutput,
  ComprehendClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DetectPiiEntitiesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ComprehendClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DetectPiiEntitiesCommandInput, DetectPiiEntitiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendClient";
    const commandName = "DetectPiiEntitiesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DetectPiiEntitiesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DetectPiiEntitiesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DetectPiiEntitiesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DetectPiiEntitiesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DetectPiiEntitiesCommandOutput> {
    return deserializeAws_json1_1DetectPiiEntitiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
