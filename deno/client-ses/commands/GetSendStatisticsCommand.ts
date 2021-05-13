import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient.ts";
import { GetSendStatisticsResponse } from "../models/models_0.ts";
import {
  deserializeAws_queryGetSendStatisticsCommand,
  serializeAws_queryGetSendStatisticsCommand,
} from "../protocols/Aws_query.ts";
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

export interface GetSendStatisticsCommandInput {}
export interface GetSendStatisticsCommandOutput extends GetSendStatisticsResponse, __MetadataBearer {}

/**
 * <p>Provides sending statistics for the current AWS Region. The result is a list of data
 *             points, representing the last two weeks of sending activity. Each data point in the list
 *             contains statistics for a 15-minute period of time.</p>
 *         <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, GetSendStatisticsCommand } from "../../client-ses/mod.ts";
 * // const { SESClient, GetSendStatisticsCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const command = new GetSendStatisticsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSendStatisticsCommandInput} for command's `input` shape.
 * @see {@link GetSendStatisticsCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetSendStatisticsCommand extends $Command<
  GetSendStatisticsCommandInput,
  GetSendStatisticsCommandOutput,
  SESClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetSendStatisticsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSendStatisticsCommandInput, GetSendStatisticsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "GetSendStatisticsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (input: any) => input,
      outputFilterSensitiveLog: GetSendStatisticsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetSendStatisticsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryGetSendStatisticsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSendStatisticsCommandOutput> {
    return deserializeAws_queryGetSendStatisticsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
