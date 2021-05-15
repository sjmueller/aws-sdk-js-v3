import { SSMContactsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMContactsClient.ts";
import { PutContactPolicyRequest, PutContactPolicyResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1PutContactPolicyCommand,
  serializeAws_json1_1PutContactPolicyCommand,
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

export interface PutContactPolicyCommandInput extends PutContactPolicyRequest {}
export interface PutContactPolicyCommandOutput extends PutContactPolicyResult, __MetadataBearer {}

/**
 * <p>Adds a resource to the specified contact or escalation plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, PutContactPolicyCommand } from "../../client-ssm-contacts/mod.ts";
 * // const { SSMContactsClient, PutContactPolicyCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * const client = new SSMContactsClient(config);
 * const command = new PutContactPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutContactPolicyCommandInput} for command's `input` shape.
 * @see {@link PutContactPolicyCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class PutContactPolicyCommand extends $Command<
  PutContactPolicyCommandInput,
  PutContactPolicyCommandOutput,
  SSMContactsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutContactPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMContactsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutContactPolicyCommandInput, PutContactPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMContactsClient";
    const commandName = "PutContactPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutContactPolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutContactPolicyResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutContactPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutContactPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutContactPolicyCommandOutput> {
    return deserializeAws_json1_1PutContactPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
