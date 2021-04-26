import { EBSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EBSClient.ts";
import { ListChangedBlocksRequest, ListChangedBlocksResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListChangedBlocksCommand,
  serializeAws_restJson1ListChangedBlocksCommand,
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

export interface ListChangedBlocksCommandInput extends ListChangedBlocksRequest {}
export interface ListChangedBlocksCommandOutput extends ListChangedBlocksResponse, __MetadataBearer {}

/**
 * <p>Returns information about the blocks that are different between two
 *             Amazon Elastic Block Store snapshots of the same volume/snapshot lineage.</p>
 */
export class ListChangedBlocksCommand extends $Command<
  ListChangedBlocksCommandInput,
  ListChangedBlocksCommandOutput,
  EBSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListChangedBlocksCommandInput) {
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
  ): Handler<ListChangedBlocksCommandInput, ListChangedBlocksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EBSClient";
    const commandName = "ListChangedBlocksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListChangedBlocksRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListChangedBlocksResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListChangedBlocksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListChangedBlocksCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListChangedBlocksCommandOutput> {
    return deserializeAws_restJson1ListChangedBlocksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
