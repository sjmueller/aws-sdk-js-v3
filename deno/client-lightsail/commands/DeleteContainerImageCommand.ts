import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient.ts";
import { DeleteContainerImageRequest, DeleteContainerImageResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DeleteContainerImageCommand,
  serializeAws_json1_1DeleteContainerImageCommand,
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

export interface DeleteContainerImageCommandInput extends DeleteContainerImageRequest {}
export interface DeleteContainerImageCommandOutput extends DeleteContainerImageResult, __MetadataBearer {}

/**
 * <p>Deletes a container image that is registered to your Amazon Lightsail container
 *       service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, DeleteContainerImageCommand } from "../../client-lightsail/mod.ts";
 * // const { LightsailClient, DeleteContainerImageCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new DeleteContainerImageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteContainerImageCommandInput} for command's `input` shape.
 * @see {@link DeleteContainerImageCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteContainerImageCommand extends $Command<
  DeleteContainerImageCommandInput,
  DeleteContainerImageCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteContainerImageCommandInput) {
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
  ): Handler<DeleteContainerImageCommandInput, DeleteContainerImageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "DeleteContainerImageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteContainerImageRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteContainerImageResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteContainerImageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteContainerImageCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteContainerImageCommandOutput> {
    return deserializeAws_json1_1DeleteContainerImageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
