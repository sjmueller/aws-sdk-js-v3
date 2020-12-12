import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient.ts";
import { ListAssetRelationshipsRequest, ListAssetRelationshipsResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListAssetRelationshipsCommand,
  serializeAws_restJson1ListAssetRelationshipsCommand,
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

export type ListAssetRelationshipsCommandInput = ListAssetRelationshipsRequest;
export type ListAssetRelationshipsCommandOutput = ListAssetRelationshipsResponse & __MetadataBearer;

/**
 * <p>Retrieves a paginated list of asset relationships for an asset. You can use this operation
 *       to identify an asset's root asset and all associated assets between that asset and its
 *       root.</p>
 */
export class ListAssetRelationshipsCommand extends $Command<
  ListAssetRelationshipsCommandInput,
  ListAssetRelationshipsCommandOutput,
  IoTSiteWiseClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListAssetRelationshipsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTSiteWiseClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAssetRelationshipsCommandInput, ListAssetRelationshipsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTSiteWiseClient";
    const commandName = "ListAssetRelationshipsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAssetRelationshipsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListAssetRelationshipsResponse.filterSensitiveLog,
    };

    if (typeof logger.info === "function") {
      logger.info({
        clientName,
        commandName,
      });
    }

    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAssetRelationshipsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListAssetRelationshipsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAssetRelationshipsCommandOutput> {
    return deserializeAws_restJson1ListAssetRelationshipsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
