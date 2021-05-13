import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient.ts";
import { ListFeatureGroupsRequest, ListFeatureGroupsResponse } from "../models/models_2.ts";
import {
  deserializeAws_json1_1ListFeatureGroupsCommand,
  serializeAws_json1_1ListFeatureGroupsCommand,
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

export interface ListFeatureGroupsCommandInput extends ListFeatureGroupsRequest {}
export interface ListFeatureGroupsCommandOutput extends ListFeatureGroupsResponse, __MetadataBearer {}

/**
 * <p>List <code>FeatureGroup</code>s based on given filter and order.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListFeatureGroupsCommand } from "../../client-sagemaker/mod.ts";
 * // const { SageMakerClient, ListFeatureGroupsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListFeatureGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListFeatureGroupsCommandInput} for command's `input` shape.
 * @see {@link ListFeatureGroupsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListFeatureGroupsCommand extends $Command<
  ListFeatureGroupsCommandInput,
  ListFeatureGroupsCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListFeatureGroupsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListFeatureGroupsCommandInput, ListFeatureGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "ListFeatureGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListFeatureGroupsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListFeatureGroupsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListFeatureGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListFeatureGroupsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListFeatureGroupsCommandOutput> {
    return deserializeAws_json1_1ListFeatureGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
