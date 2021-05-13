import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient.ts";
import { GetExternalModelsRequest, GetExternalModelsResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1GetExternalModelsCommand,
  serializeAws_json1_1GetExternalModelsCommand,
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

export interface GetExternalModelsCommandInput extends GetExternalModelsRequest {}
export interface GetExternalModelsCommandOutput extends GetExternalModelsResult, __MetadataBearer {}

/**
 * <p>Gets the details for one or more Amazon SageMaker models that have been imported into the
 *          service. This is a paginated API. If you provide a null <code>maxResults</code>, this
 *          actions retrieves a maximum of 10 records per page. If you provide a
 *             <code>maxResults</code>, the value must be between 5 and 10. To get the next page
 *          results, provide the pagination token from the <code>GetExternalModelsResult</code> as part
 *          of your request. A null pagination token fetches the records from the beginning. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, GetExternalModelsCommand } from "../../client-frauddetector/mod.ts";
 * // const { FraudDetectorClient, GetExternalModelsCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new GetExternalModelsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetExternalModelsCommandInput} for command's `input` shape.
 * @see {@link GetExternalModelsCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetExternalModelsCommand extends $Command<
  GetExternalModelsCommandInput,
  GetExternalModelsCommandOutput,
  FraudDetectorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetExternalModelsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FraudDetectorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetExternalModelsCommandInput, GetExternalModelsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FraudDetectorClient";
    const commandName = "GetExternalModelsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetExternalModelsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetExternalModelsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetExternalModelsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetExternalModelsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetExternalModelsCommandOutput> {
    return deserializeAws_json1_1GetExternalModelsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
