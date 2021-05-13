import { EBSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EBSClient.ts";
import { ListSnapshotBlocksRequest, ListSnapshotBlocksResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListSnapshotBlocksCommand,
  serializeAws_restJson1ListSnapshotBlocksCommand,
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

export interface ListSnapshotBlocksCommandInput extends ListSnapshotBlocksRequest {}
export interface ListSnapshotBlocksCommandOutput extends ListSnapshotBlocksResponse, __MetadataBearer {}

/**
 * <p>Returns information about the blocks in an Amazon Elastic Block Store snapshot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EBSClient, ListSnapshotBlocksCommand } from "../../client-ebs/mod.ts";
 * // const { EBSClient, ListSnapshotBlocksCommand } = require("@aws-sdk/client-ebs"); // CommonJS import
 * const client = new EBSClient(config);
 * const command = new ListSnapshotBlocksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSnapshotBlocksCommandInput} for command's `input` shape.
 * @see {@link ListSnapshotBlocksCommandOutput} for command's `response` shape.
 * @see {@link EBSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListSnapshotBlocksCommand extends $Command<
  ListSnapshotBlocksCommandInput,
  ListSnapshotBlocksCommandOutput,
  EBSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListSnapshotBlocksCommandInput) {
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
  ): Handler<ListSnapshotBlocksCommandInput, ListSnapshotBlocksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EBSClient";
    const commandName = "ListSnapshotBlocksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListSnapshotBlocksRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListSnapshotBlocksResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListSnapshotBlocksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListSnapshotBlocksCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSnapshotBlocksCommandOutput> {
    return deserializeAws_restJson1ListSnapshotBlocksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
