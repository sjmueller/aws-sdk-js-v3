import { LookoutEquipmentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutEquipmentClient.ts";
import { DescribeDataIngestionJobRequest, DescribeDataIngestionJobResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_0DescribeDataIngestionJobCommand,
  serializeAws_json1_0DescribeDataIngestionJobCommand,
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

export interface DescribeDataIngestionJobCommandInput extends DescribeDataIngestionJobRequest {}
export interface DescribeDataIngestionJobCommandOutput extends DescribeDataIngestionJobResponse, __MetadataBearer {}

/**
 * <p>Provides information on a specific data ingestion job such as creation time, dataset
 *          ARN, status, and so on. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, DescribeDataIngestionJobCommand } from "../../client-lookoutequipment/mod.ts";
 * // const { LookoutEquipmentClient, DescribeDataIngestionJobCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * const client = new LookoutEquipmentClient(config);
 * const command = new DescribeDataIngestionJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDataIngestionJobCommandInput} for command's `input` shape.
 * @see {@link DescribeDataIngestionJobCommandOutput} for command's `response` shape.
 * @see {@link LookoutEquipmentClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeDataIngestionJobCommand extends $Command<
  DescribeDataIngestionJobCommandInput,
  DescribeDataIngestionJobCommandOutput,
  LookoutEquipmentClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeDataIngestionJobCommandInput) {
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
  ): Handler<DescribeDataIngestionJobCommandInput, DescribeDataIngestionJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LookoutEquipmentClient";
    const commandName = "DescribeDataIngestionJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeDataIngestionJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeDataIngestionJobResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeDataIngestionJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0DescribeDataIngestionJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeDataIngestionJobCommandOutput> {
    return deserializeAws_json1_0DescribeDataIngestionJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
