import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient.ts";
import { CreateAccessPolicyRequest, CreateAccessPolicyResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1CreateAccessPolicyCommand,
  serializeAws_restJson1CreateAccessPolicyCommand,
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

export interface CreateAccessPolicyCommandInput extends CreateAccessPolicyRequest {}
export interface CreateAccessPolicyCommandOutput extends CreateAccessPolicyResponse, __MetadataBearer {}

/**
 * <p>Creates an access policy that grants the specified identity (AWS SSO user, AWS SSO group, or
 *       IAM user) access to the specified AWS IoT SiteWise Monitor portal or project resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, CreateAccessPolicyCommand } from "../../client-iotsitewise/mod.ts";
 * // const { IoTSiteWiseClient, CreateAccessPolicyCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new CreateAccessPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAccessPolicyCommandInput} for command's `input` shape.
 * @see {@link CreateAccessPolicyCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateAccessPolicyCommand extends $Command<
  CreateAccessPolicyCommandInput,
  CreateAccessPolicyCommandOutput,
  IoTSiteWiseClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateAccessPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTSiteWiseClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateAccessPolicyCommandInput, CreateAccessPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTSiteWiseClient";
    const commandName = "CreateAccessPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateAccessPolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateAccessPolicyResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateAccessPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateAccessPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateAccessPolicyCommandOutput> {
    return deserializeAws_restJson1CreateAccessPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
