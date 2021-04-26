import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient.ts";
import { CreateDatasetGroupRequest, CreateDatasetGroupResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1CreateDatasetGroupCommand,
  serializeAws_json1_1CreateDatasetGroupCommand,
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

export interface CreateDatasetGroupCommandInput extends CreateDatasetGroupRequest {}
export interface CreateDatasetGroupCommandOutput extends CreateDatasetGroupResponse, __MetadataBearer {}

/**
 * <p>Creates a dataset group, which holds a collection of related datasets. You can add
 *       datasets to the dataset group when you create the dataset group, or later by using the <a>UpdateDatasetGroup</a> operation.</p>
 *          <p>After creating a dataset group and adding datasets, you use the dataset group when you
 *       create a predictor. For more information, see <a>howitworks-datasets-groups</a>.</p>
 *          <p>To get a list of all your datasets groups, use the <a>ListDatasetGroups</a>
 *       operation.</p>
 *          <note>
 *             <p>The <code>Status</code> of a dataset group must be <code>ACTIVE</code> before you can
 *          use the dataset group to create a predictor. To get the status, use the <a>DescribeDatasetGroup</a> operation.</p>
 *          </note>
 */
export class CreateDatasetGroupCommand extends $Command<
  CreateDatasetGroupCommandInput,
  CreateDatasetGroupCommandOutput,
  ForecastClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateDatasetGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ForecastClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateDatasetGroupCommandInput, CreateDatasetGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ForecastClient";
    const commandName = "CreateDatasetGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDatasetGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateDatasetGroupResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateDatasetGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateDatasetGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDatasetGroupCommandOutput> {
    return deserializeAws_json1_1CreateDatasetGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
