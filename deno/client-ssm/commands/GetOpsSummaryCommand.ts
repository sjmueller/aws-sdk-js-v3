import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient.ts";
import { GetOpsSummaryResult } from "../models/models_1.ts";
import { GetOpsSummaryRequest } from "../models/models_2.ts";
import {
  deserializeAws_json1_1GetOpsSummaryCommand,
  serializeAws_json1_1GetOpsSummaryCommand,
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

export interface GetOpsSummaryCommandInput extends GetOpsSummaryRequest {}
export interface GetOpsSummaryCommandOutput extends GetOpsSummaryResult, __MetadataBearer {}

/**
 * <p>View a summary of OpsItems based on specified filters and aggregators.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetOpsSummaryCommand } from "../../client-ssm/mod.ts";
 * // const { SSMClient, GetOpsSummaryCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new GetOpsSummaryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetOpsSummaryCommandInput} for command's `input` shape.
 * @see {@link GetOpsSummaryCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetOpsSummaryCommand extends $Command<
  GetOpsSummaryCommandInput,
  GetOpsSummaryCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetOpsSummaryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetOpsSummaryCommandInput, GetOpsSummaryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "GetOpsSummaryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetOpsSummaryRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetOpsSummaryResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetOpsSummaryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetOpsSummaryCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetOpsSummaryCommandOutput> {
    return deserializeAws_json1_1GetOpsSummaryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
