import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient.ts";
import { DescribeInputSecurityGroupRequest, DescribeInputSecurityGroupResponse } from "../models/models_1.ts";
import {
  deserializeAws_restJson1DescribeInputSecurityGroupCommand,
  serializeAws_restJson1DescribeInputSecurityGroupCommand,
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

export interface DescribeInputSecurityGroupCommandInput extends DescribeInputSecurityGroupRequest {}
export interface DescribeInputSecurityGroupCommandOutput extends DescribeInputSecurityGroupResponse, __MetadataBearer {}

/**
 * Produces a summary of an Input Security Group
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, DescribeInputSecurityGroupCommand } from "../../client-medialive/mod.ts";
 * // const { MediaLiveClient, DescribeInputSecurityGroupCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new DescribeInputSecurityGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeInputSecurityGroupCommandInput} for command's `input` shape.
 * @see {@link DescribeInputSecurityGroupCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeInputSecurityGroupCommand extends $Command<
  DescribeInputSecurityGroupCommandInput,
  DescribeInputSecurityGroupCommandOutput,
  MediaLiveClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeInputSecurityGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaLiveClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeInputSecurityGroupCommandInput, DescribeInputSecurityGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaLiveClient";
    const commandName = "DescribeInputSecurityGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeInputSecurityGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeInputSecurityGroupResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeInputSecurityGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeInputSecurityGroupCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeInputSecurityGroupCommandOutput> {
    return deserializeAws_restJson1DescribeInputSecurityGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
