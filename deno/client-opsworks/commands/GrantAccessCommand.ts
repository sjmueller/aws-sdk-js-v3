import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient.ts";
import { GrantAccessRequest, GrantAccessResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1GrantAccessCommand,
  serializeAws_json1_1GrantAccessCommand,
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

export interface GrantAccessCommandInput extends GrantAccessRequest {}
export interface GrantAccessCommandOutput extends GrantAccessResult, __MetadataBearer {}

/**
 * <note>
 *             <p>This action can be used only with Windows stacks.</p>
 *          </note>
 *          <p>Grants RDP access to a Windows instance for a specified time period.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, GrantAccessCommand } from "../../client-opsworks/mod.ts";
 * // const { OpsWorksClient, GrantAccessCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const command = new GrantAccessCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GrantAccessCommandInput} for command's `input` shape.
 * @see {@link GrantAccessCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GrantAccessCommand extends $Command<
  GrantAccessCommandInput,
  GrantAccessCommandOutput,
  OpsWorksClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GrantAccessCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OpsWorksClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GrantAccessCommandInput, GrantAccessCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpsWorksClient";
    const commandName = "GrantAccessCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GrantAccessRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GrantAccessResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GrantAccessCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GrantAccessCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GrantAccessCommandOutput> {
    return deserializeAws_json1_1GrantAccessCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
