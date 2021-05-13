import { LookoutMetricsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutMetricsClient.ts";
import { GetAnomalyGroupRequest, GetAnomalyGroupResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetAnomalyGroupCommand,
  serializeAws_restJson1GetAnomalyGroupCommand,
} from "../protocols/Aws_restJson1.ts";
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

export interface GetAnomalyGroupCommandInput extends GetAnomalyGroupRequest {}
export interface GetAnomalyGroupCommandOutput extends GetAnomalyGroupResponse, __MetadataBearer {}

/**
 * <p>Returns details about a group of anomalous metrics.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutMetricsClient, GetAnomalyGroupCommand } from "../../client-lookoutmetrics/mod.ts";
 * // const { LookoutMetricsClient, GetAnomalyGroupCommand } = require("@aws-sdk/client-lookoutmetrics"); // CommonJS import
 * const client = new LookoutMetricsClient(config);
 * const command = new GetAnomalyGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAnomalyGroupCommandInput} for command's `input` shape.
 * @see {@link GetAnomalyGroupCommandOutput} for command's `response` shape.
 * @see {@link LookoutMetricsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetAnomalyGroupCommand extends $Command<
  GetAnomalyGroupCommandInput,
  GetAnomalyGroupCommandOutput,
  LookoutMetricsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetAnomalyGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LookoutMetricsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetAnomalyGroupCommandInput, GetAnomalyGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LookoutMetricsClient";
    const commandName = "GetAnomalyGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetAnomalyGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetAnomalyGroupResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetAnomalyGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetAnomalyGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetAnomalyGroupCommandOutput> {
    return deserializeAws_restJson1GetAnomalyGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
