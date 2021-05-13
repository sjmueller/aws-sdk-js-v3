import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient.ts";
import { DescribeProtectionGroupRequest, DescribeProtectionGroupResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DescribeProtectionGroupCommand,
  serializeAws_json1_1DescribeProtectionGroupCommand,
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

export interface DescribeProtectionGroupCommandInput extends DescribeProtectionGroupRequest {}
export interface DescribeProtectionGroupCommandOutput extends DescribeProtectionGroupResponse, __MetadataBearer {}

/**
 * <p>Returns the specification for the specified protection group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, DescribeProtectionGroupCommand } from "../../client-shield/mod.ts";
 * // const { ShieldClient, DescribeProtectionGroupCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * const client = new ShieldClient(config);
 * const command = new DescribeProtectionGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeProtectionGroupCommandInput} for command's `input` shape.
 * @see {@link DescribeProtectionGroupCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeProtectionGroupCommand extends $Command<
  DescribeProtectionGroupCommandInput,
  DescribeProtectionGroupCommandOutput,
  ShieldClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeProtectionGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ShieldClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeProtectionGroupCommandInput, DescribeProtectionGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ShieldClient";
    const commandName = "DescribeProtectionGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeProtectionGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeProtectionGroupResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeProtectionGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeProtectionGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeProtectionGroupCommandOutput> {
    return deserializeAws_json1_1DescribeProtectionGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
