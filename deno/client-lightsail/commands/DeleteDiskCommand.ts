import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient.ts";
import { DeleteDiskRequest, DeleteDiskResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DeleteDiskCommand,
  serializeAws_json1_1DeleteDiskCommand,
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

export interface DeleteDiskCommandInput extends DeleteDiskRequest {}
export interface DeleteDiskCommandOutput extends DeleteDiskResult, __MetadataBearer {}

/**
 * <p>Deletes the specified block storage disk. The disk must be in the <code>available</code>
 *       state (not attached to a Lightsail instance).</p>
 *          <note>
 *             <p>The disk may remain in the <code>deleting</code> state for several minutes.</p>
 *          </note>
 *          <p>The <code>delete disk</code> operation supports tag-based access control via resource tags
 *       applied to the resource identified by <code>disk name</code>. For more information, see the
 *         <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 */
export class DeleteDiskCommand extends $Command<
  DeleteDiskCommandInput,
  DeleteDiskCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteDiskCommandInput) {
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
  ): Handler<DeleteDiskCommandInput, DeleteDiskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "DeleteDiskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteDiskRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteDiskResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteDiskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteDiskCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteDiskCommandOutput> {
    return deserializeAws_json1_1DeleteDiskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
