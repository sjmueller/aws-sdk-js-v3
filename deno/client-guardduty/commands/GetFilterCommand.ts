import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient.ts";
import { GetFilterRequest, GetFilterResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetFilterCommand,
  serializeAws_restJson1GetFilterCommand,
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

export interface GetFilterCommandInput extends GetFilterRequest {}
export interface GetFilterCommandOutput extends GetFilterResponse, __MetadataBearer {}

/**
 * <p>Returns the details of the filter specified by the filter name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, GetFilterCommand } from "../../client-guardduty/mod.ts";
 * // const { GuardDutyClient, GetFilterCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new GetFilterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetFilterCommandInput} for command's `input` shape.
 * @see {@link GetFilterCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetFilterCommand extends $Command<
  GetFilterCommandInput,
  GetFilterCommandOutput,
  GuardDutyClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetFilterCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GuardDutyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetFilterCommandInput, GetFilterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GuardDutyClient";
    const commandName = "GetFilterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetFilterRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetFilterResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetFilterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetFilterCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetFilterCommandOutput> {
    return deserializeAws_restJson1GetFilterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
