import {
  ComprehendMedicalClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ComprehendMedicalClient.ts";
import { DescribeEntitiesDetectionV2JobRequest, DescribeEntitiesDetectionV2JobResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DescribeEntitiesDetectionV2JobCommand,
  serializeAws_json1_1DescribeEntitiesDetectionV2JobCommand,
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

export interface DescribeEntitiesDetectionV2JobCommandInput extends DescribeEntitiesDetectionV2JobRequest {}
export interface DescribeEntitiesDetectionV2JobCommandOutput
  extends DescribeEntitiesDetectionV2JobResponse,
    __MetadataBearer {}

/**
 * <p>Gets the properties associated with a medical entities detection job. Use this operation
 *       to get the status of a detection job.</p>
 */
export class DescribeEntitiesDetectionV2JobCommand extends $Command<
  DescribeEntitiesDetectionV2JobCommandInput,
  DescribeEntitiesDetectionV2JobCommandOutput,
  ComprehendMedicalClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeEntitiesDetectionV2JobCommandInput) {
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
  ): Handler<DescribeEntitiesDetectionV2JobCommandInput, DescribeEntitiesDetectionV2JobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendMedicalClient";
    const commandName = "DescribeEntitiesDetectionV2JobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeEntitiesDetectionV2JobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeEntitiesDetectionV2JobResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeEntitiesDetectionV2JobCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeEntitiesDetectionV2JobCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeEntitiesDetectionV2JobCommandOutput> {
    return deserializeAws_json1_1DescribeEntitiesDetectionV2JobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
