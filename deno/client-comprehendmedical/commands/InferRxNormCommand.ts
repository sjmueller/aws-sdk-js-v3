import {
  ComprehendMedicalClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ComprehendMedicalClient.ts";
import { InferRxNormRequest, InferRxNormResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1InferRxNormCommand,
  serializeAws_json1_1InferRxNormCommand,
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

export type InferRxNormCommandInput = InferRxNormRequest;
export type InferRxNormCommandOutput = InferRxNormResponse & __MetadataBearer;

/**
 * <p>InferRxNorm detects medications as entities listed in a patient record and links to the
 *       normalized concept identifiers in the RxNorm database from the National Library of Medicine.
 *       Amazon Comprehend Medical only detects medical entities in English language texts.  </p>
 */
export class InferRxNormCommand extends $Command<
  InferRxNormCommandInput,
  InferRxNormCommandOutput,
  ComprehendMedicalClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: InferRxNormCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ComprehendMedicalClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<InferRxNormCommandInput, InferRxNormCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendMedicalClient";
    const commandName = "InferRxNormCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: InferRxNormRequest.filterSensitiveLog,
      outputFilterSensitiveLog: InferRxNormResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: InferRxNormCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1InferRxNormCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<InferRxNormCommandOutput> {
    return deserializeAws_json1_1InferRxNormCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
