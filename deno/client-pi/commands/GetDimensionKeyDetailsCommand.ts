import { PIClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PIClient.ts";
import { GetDimensionKeyDetailsRequest, GetDimensionKeyDetailsResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1GetDimensionKeyDetailsCommand,
  serializeAws_json1_1GetDimensionKeyDetailsCommand,
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

export interface GetDimensionKeyDetailsCommandInput extends GetDimensionKeyDetailsRequest {}
export interface GetDimensionKeyDetailsCommandOutput extends GetDimensionKeyDetailsResponse, __MetadataBearer {}

/**
 * <p>Get the attributes of the specified dimension group for a DB instance or data source. For example, if you specify a
 *       SQL ID, <code>GetDimensionKeyDetails</code> retrieves the full text of the dimension <code>db.sql.statement</code>
 *       associated with this ID. This operation is useful because <code>GetResourceMetrics</code> and
 *         <code>DescribeDimensionKeys</code> don't support retrieval of large SQL statement text.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PIClient, GetDimensionKeyDetailsCommand } from "../../client-pi/mod.ts";
 * // const { PIClient, GetDimensionKeyDetailsCommand } = require("@aws-sdk/client-pi"); // CommonJS import
 * const client = new PIClient(config);
 * const command = new GetDimensionKeyDetailsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDimensionKeyDetailsCommandInput} for command's `input` shape.
 * @see {@link GetDimensionKeyDetailsCommandOutput} for command's `response` shape.
 * @see {@link PIClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetDimensionKeyDetailsCommand extends $Command<
  GetDimensionKeyDetailsCommandInput,
  GetDimensionKeyDetailsCommandOutput,
  PIClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetDimensionKeyDetailsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PIClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDimensionKeyDetailsCommandInput, GetDimensionKeyDetailsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PIClient";
    const commandName = "GetDimensionKeyDetailsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDimensionKeyDetailsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetDimensionKeyDetailsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetDimensionKeyDetailsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetDimensionKeyDetailsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDimensionKeyDetailsCommandOutput> {
    return deserializeAws_json1_1GetDimensionKeyDetailsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
