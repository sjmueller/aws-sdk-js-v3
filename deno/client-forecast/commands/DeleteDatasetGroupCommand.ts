import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient.ts";
import { DeleteDatasetGroupRequest } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DeleteDatasetGroupCommand,
  serializeAws_json1_1DeleteDatasetGroupCommand,
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

export interface DeleteDatasetGroupCommandInput extends DeleteDatasetGroupRequest {}
export interface DeleteDatasetGroupCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a dataset group created using the <a>CreateDatasetGroup</a> operation.
 *       You can only delete dataset groups that have a status of <code>ACTIVE</code>,
 *         <code>CREATE_FAILED</code>, or <code>UPDATE_FAILED</code>. To get the status, use the <a>DescribeDatasetGroup</a> operation.</p>
 *          <p>This operation deletes only the dataset group, not the datasets in the group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, DeleteDatasetGroupCommand } from "../../client-forecast/mod.ts";
 * // const { ForecastClient, DeleteDatasetGroupCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const command = new DeleteDatasetGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDatasetGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteDatasetGroupCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteDatasetGroupCommand extends $Command<
  DeleteDatasetGroupCommandInput,
  DeleteDatasetGroupCommandOutput,
  ForecastClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteDatasetGroupCommandInput) {
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
  ): Handler<DeleteDatasetGroupCommandInput, DeleteDatasetGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ForecastClient";
    const commandName = "DeleteDatasetGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteDatasetGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteDatasetGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteDatasetGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteDatasetGroupCommandOutput> {
    return deserializeAws_json1_1DeleteDatasetGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
