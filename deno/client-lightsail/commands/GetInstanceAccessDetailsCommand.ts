import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient.ts";
import { GetInstanceAccessDetailsRequest, GetInstanceAccessDetailsResult } from "../models/models_1.ts";
import {
  deserializeAws_json1_1GetInstanceAccessDetailsCommand,
  serializeAws_json1_1GetInstanceAccessDetailsCommand,
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

export interface GetInstanceAccessDetailsCommandInput extends GetInstanceAccessDetailsRequest {}
export interface GetInstanceAccessDetailsCommandOutput extends GetInstanceAccessDetailsResult, __MetadataBearer {}

/**
 * <p>Returns temporary SSH keys you can use to connect to a specific virtual private server, or
 *         <i>instance</i>.</p>
 *          <p>The <code>get instance access details</code> operation supports tag-based access control
 *       via resource tags applied to the resource identified by <code>instance name</code>. For more
 *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetInstanceAccessDetailsCommand } from "../../client-lightsail/mod.ts";
 * // const { LightsailClient, GetInstanceAccessDetailsCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetInstanceAccessDetailsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetInstanceAccessDetailsCommandInput} for command's `input` shape.
 * @see {@link GetInstanceAccessDetailsCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetInstanceAccessDetailsCommand extends $Command<
  GetInstanceAccessDetailsCommandInput,
  GetInstanceAccessDetailsCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetInstanceAccessDetailsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetInstanceAccessDetailsCommandInput, GetInstanceAccessDetailsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "GetInstanceAccessDetailsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetInstanceAccessDetailsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetInstanceAccessDetailsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetInstanceAccessDetailsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetInstanceAccessDetailsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetInstanceAccessDetailsCommandOutput> {
    return deserializeAws_json1_1GetInstanceAccessDetailsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
