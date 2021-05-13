import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient.ts";
import { UpdateInputSecurityGroupRequest, UpdateInputSecurityGroupResponse } from "../models/models_1.ts";
import {
  deserializeAws_restJson1UpdateInputSecurityGroupCommand,
  serializeAws_restJson1UpdateInputSecurityGroupCommand,
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

export interface UpdateInputSecurityGroupCommandInput extends UpdateInputSecurityGroupRequest {}
export interface UpdateInputSecurityGroupCommandOutput extends UpdateInputSecurityGroupResponse, __MetadataBearer {}

/**
 * Update an Input Security Group's Whilelists.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, UpdateInputSecurityGroupCommand } from "../../client-medialive/mod.ts";
 * // const { MediaLiveClient, UpdateInputSecurityGroupCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new UpdateInputSecurityGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateInputSecurityGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateInputSecurityGroupCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateInputSecurityGroupCommand extends $Command<
  UpdateInputSecurityGroupCommandInput,
  UpdateInputSecurityGroupCommandOutput,
  MediaLiveClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateInputSecurityGroupCommandInput) {
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
  ): Handler<UpdateInputSecurityGroupCommandInput, UpdateInputSecurityGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaLiveClient";
    const commandName = "UpdateInputSecurityGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateInputSecurityGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateInputSecurityGroupResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateInputSecurityGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateInputSecurityGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateInputSecurityGroupCommandOutput> {
    return deserializeAws_restJson1UpdateInputSecurityGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
