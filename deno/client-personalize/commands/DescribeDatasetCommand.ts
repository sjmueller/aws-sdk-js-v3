import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient.ts";
import { DescribeDatasetRequest, DescribeDatasetResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DescribeDatasetCommand,
  serializeAws_json1_1DescribeDatasetCommand,
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

export interface DescribeDatasetCommandInput extends DescribeDatasetRequest {}
export interface DescribeDatasetCommandOutput extends DescribeDatasetResponse, __MetadataBearer {}

/**
 * <p>Describes the given dataset. For more information on datasets, see <a>CreateDataset</a>.</p>
 */
export class DescribeDatasetCommand extends $Command<
  DescribeDatasetCommandInput,
  DescribeDatasetCommandOutput,
  PersonalizeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeDatasetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PersonalizeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeDatasetCommandInput, DescribeDatasetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PersonalizeClient";
    const commandName = "DescribeDatasetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeDatasetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeDatasetResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeDatasetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeDatasetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeDatasetCommandOutput> {
    return deserializeAws_json1_1DescribeDatasetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
