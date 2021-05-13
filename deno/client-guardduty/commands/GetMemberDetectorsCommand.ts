import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient.ts";
import { GetMemberDetectorsRequest, GetMemberDetectorsResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetMemberDetectorsCommand,
  serializeAws_restJson1GetMemberDetectorsCommand,
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

export interface GetMemberDetectorsCommandInput extends GetMemberDetectorsRequest {}
export interface GetMemberDetectorsCommandOutput extends GetMemberDetectorsResponse, __MetadataBearer {}

/**
 * <p>Describes which data sources are enabled for the member account's detector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, GetMemberDetectorsCommand } from "../../client-guardduty/mod.ts";
 * // const { GuardDutyClient, GetMemberDetectorsCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new GetMemberDetectorsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMemberDetectorsCommandInput} for command's `input` shape.
 * @see {@link GetMemberDetectorsCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetMemberDetectorsCommand extends $Command<
  GetMemberDetectorsCommandInput,
  GetMemberDetectorsCommandOutput,
  GuardDutyClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetMemberDetectorsCommandInput) {
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
  ): Handler<GetMemberDetectorsCommandInput, GetMemberDetectorsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GuardDutyClient";
    const commandName = "GetMemberDetectorsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetMemberDetectorsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetMemberDetectorsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetMemberDetectorsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetMemberDetectorsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetMemberDetectorsCommandOutput> {
    return deserializeAws_restJson1GetMemberDetectorsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
