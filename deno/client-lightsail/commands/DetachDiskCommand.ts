import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient.ts";
import { DetachDiskRequest, DetachDiskResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DetachDiskCommand,
  serializeAws_json1_1DetachDiskCommand,
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

export interface DetachDiskCommandInput extends DetachDiskRequest {}
export interface DetachDiskCommandOutput extends DetachDiskResult, __MetadataBearer {}

/**
 * <p>Detaches a stopped block storage disk from a Lightsail instance. Make sure to unmount
 *       any file systems on the device within your operating system before stopping the instance and
 *       detaching the disk.</p>
 *          <p>The <code>detach disk</code> operation supports tag-based access control via resource tags
 *       applied to the resource identified by <code>disk name</code>. For more information, see the
 *         <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, DetachDiskCommand } from "../../client-lightsail/mod.ts";
 * // const { LightsailClient, DetachDiskCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new DetachDiskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetachDiskCommandInput} for command's `input` shape.
 * @see {@link DetachDiskCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DetachDiskCommand extends $Command<
  DetachDiskCommandInput,
  DetachDiskCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DetachDiskCommandInput) {
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
  ): Handler<DetachDiskCommandInput, DetachDiskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "DetachDiskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DetachDiskRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DetachDiskResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DetachDiskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DetachDiskCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DetachDiskCommandOutput> {
    return deserializeAws_json1_1DetachDiskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
