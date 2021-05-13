import { EBSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EBSClient.ts";
import { CompleteSnapshotRequest, CompleteSnapshotResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1CompleteSnapshotCommand,
  serializeAws_restJson1CompleteSnapshotCommand,
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

export interface CompleteSnapshotCommandInput extends CompleteSnapshotRequest {}
export interface CompleteSnapshotCommandOutput extends CompleteSnapshotResponse, __MetadataBearer {}

/**
 * <p>Seals and completes the snapshot after all of the required blocks of data have been
 *             written to it. Completing the snapshot changes the status to <code>completed</code>. You
 *             cannot write new blocks to a snapshot after it has been completed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EBSClient, CompleteSnapshotCommand } from "../../client-ebs/mod.ts";
 * // const { EBSClient, CompleteSnapshotCommand } = require("@aws-sdk/client-ebs"); // CommonJS import
 * const client = new EBSClient(config);
 * const command = new CompleteSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CompleteSnapshotCommandInput} for command's `input` shape.
 * @see {@link CompleteSnapshotCommandOutput} for command's `response` shape.
 * @see {@link EBSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CompleteSnapshotCommand extends $Command<
  CompleteSnapshotCommandInput,
  CompleteSnapshotCommandOutput,
  EBSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CompleteSnapshotCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EBSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CompleteSnapshotCommandInput, CompleteSnapshotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EBSClient";
    const commandName = "CompleteSnapshotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CompleteSnapshotRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CompleteSnapshotResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CompleteSnapshotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CompleteSnapshotCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CompleteSnapshotCommandOutput> {
    return deserializeAws_restJson1CompleteSnapshotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
