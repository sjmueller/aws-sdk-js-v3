import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient.ts";
import { TestIdentityProviderRequest, TestIdentityProviderResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1TestIdentityProviderCommand,
  serializeAws_json1_1TestIdentityProviderCommand,
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

export interface TestIdentityProviderCommandInput extends TestIdentityProviderRequest {}
export interface TestIdentityProviderCommandOutput extends TestIdentityProviderResponse, __MetadataBearer {}

/**
 * <p>If the <code>IdentityProviderType</code> of a file transfer protocol-enabled server is
 *         <code>AWS_DIRECTORY_SERVICE</code> or <code>API_Gateway</code>, tests whether your identity
 *       provider is set up successfully. We highly recommend that you call this operation to test your
 *       authentication method as soon as you create your server. By doing so, you can troubleshoot
 *       issues with the identity provider integration to ensure that your users can successfully use
 *       the service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, TestIdentityProviderCommand } from "../../client-transfer/mod.ts";
 * // const { TransferClient, TestIdentityProviderCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const command = new TestIdentityProviderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TestIdentityProviderCommandInput} for command's `input` shape.
 * @see {@link TestIdentityProviderCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class TestIdentityProviderCommand extends $Command<
  TestIdentityProviderCommandInput,
  TestIdentityProviderCommandOutput,
  TransferClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: TestIdentityProviderCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TransferClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<TestIdentityProviderCommandInput, TestIdentityProviderCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TransferClient";
    const commandName = "TestIdentityProviderCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: TestIdentityProviderRequest.filterSensitiveLog,
      outputFilterSensitiveLog: TestIdentityProviderResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: TestIdentityProviderCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1TestIdentityProviderCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TestIdentityProviderCommandOutput> {
    return deserializeAws_json1_1TestIdentityProviderCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
