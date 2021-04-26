import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient.ts";
import { DeleteInstanceSnapshotRequest, DeleteInstanceSnapshotResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DeleteInstanceSnapshotCommand,
  serializeAws_json1_1DeleteInstanceSnapshotCommand,
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

export interface DeleteInstanceSnapshotCommandInput extends DeleteInstanceSnapshotRequest {}
export interface DeleteInstanceSnapshotCommandOutput extends DeleteInstanceSnapshotResult, __MetadataBearer {}

/**
 * <p>Deletes a specific snapshot of a virtual private server (or
 *       <i>instance</i>).</p>
 *          <p>The <code>delete instance snapshot</code> operation supports tag-based access control via
 *       resource tags applied to the resource identified by <code>instance snapshot name</code>. For
 *       more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 */
export class DeleteInstanceSnapshotCommand extends $Command<
  DeleteInstanceSnapshotCommandInput,
  DeleteInstanceSnapshotCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteInstanceSnapshotCommandInput) {
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
  ): Handler<DeleteInstanceSnapshotCommandInput, DeleteInstanceSnapshotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "DeleteInstanceSnapshotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteInstanceSnapshotRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteInstanceSnapshotResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteInstanceSnapshotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteInstanceSnapshotCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteInstanceSnapshotCommandOutput> {
    return deserializeAws_json1_1DeleteInstanceSnapshotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
