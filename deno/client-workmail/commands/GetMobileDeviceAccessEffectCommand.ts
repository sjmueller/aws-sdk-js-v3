import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient.ts";
import { GetMobileDeviceAccessEffectRequest, GetMobileDeviceAccessEffectResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1GetMobileDeviceAccessEffectCommand,
  serializeAws_json1_1GetMobileDeviceAccessEffectCommand,
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

export interface GetMobileDeviceAccessEffectCommandInput extends GetMobileDeviceAccessEffectRequest {}
export interface GetMobileDeviceAccessEffectCommandOutput
  extends GetMobileDeviceAccessEffectResponse,
    __MetadataBearer {}

/**
 * <p>Simulates the effect of the mobile device access rules for the given attributes of a sample access event. Use this method to test the effects of the current set of mobile device access
 *          rules for the Amazon WorkMail organization for a particular user's attributes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, GetMobileDeviceAccessEffectCommand } from "../../client-workmail/mod.ts";
 * // const { WorkMailClient, GetMobileDeviceAccessEffectCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new GetMobileDeviceAccessEffectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMobileDeviceAccessEffectCommandInput} for command's `input` shape.
 * @see {@link GetMobileDeviceAccessEffectCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetMobileDeviceAccessEffectCommand extends $Command<
  GetMobileDeviceAccessEffectCommandInput,
  GetMobileDeviceAccessEffectCommandOutput,
  WorkMailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetMobileDeviceAccessEffectCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkMailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetMobileDeviceAccessEffectCommandInput, GetMobileDeviceAccessEffectCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkMailClient";
    const commandName = "GetMobileDeviceAccessEffectCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetMobileDeviceAccessEffectRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetMobileDeviceAccessEffectResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetMobileDeviceAccessEffectCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetMobileDeviceAccessEffectCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetMobileDeviceAccessEffectCommandOutput> {
    return deserializeAws_json1_1GetMobileDeviceAccessEffectCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
