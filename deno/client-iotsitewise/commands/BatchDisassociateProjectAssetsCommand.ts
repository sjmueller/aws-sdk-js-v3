import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient.ts";
import { BatchDisassociateProjectAssetsRequest, BatchDisassociateProjectAssetsResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1BatchDisassociateProjectAssetsCommand,
  serializeAws_restJson1BatchDisassociateProjectAssetsCommand,
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

export interface BatchDisassociateProjectAssetsCommandInput extends BatchDisassociateProjectAssetsRequest {}
export interface BatchDisassociateProjectAssetsCommandOutput
  extends BatchDisassociateProjectAssetsResponse,
    __MetadataBearer {}

/**
 * <p>Disassociates a group (batch) of assets from an AWS IoT SiteWise Monitor project.</p>
 */
export class BatchDisassociateProjectAssetsCommand extends $Command<
  BatchDisassociateProjectAssetsCommandInput,
  BatchDisassociateProjectAssetsCommandOutput,
  IoTSiteWiseClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchDisassociateProjectAssetsCommandInput) {
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
  ): Handler<BatchDisassociateProjectAssetsCommandInput, BatchDisassociateProjectAssetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTSiteWiseClient";
    const commandName = "BatchDisassociateProjectAssetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchDisassociateProjectAssetsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchDisassociateProjectAssetsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: BatchDisassociateProjectAssetsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchDisassociateProjectAssetsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchDisassociateProjectAssetsCommandOutput> {
    return deserializeAws_restJson1BatchDisassociateProjectAssetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
