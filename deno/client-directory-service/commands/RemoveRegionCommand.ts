import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient.ts";
import { RemoveRegionRequest, RemoveRegionResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1RemoveRegionCommand,
  serializeAws_json1_1RemoveRegionCommand,
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

export interface RemoveRegionCommandInput extends RemoveRegionRequest {}
export interface RemoveRegionCommandOutput extends RemoveRegionResult, __MetadataBearer {}

/**
 * <p>Stops all replication and removes the domain controllers from the specified Region. You
 *       cannot remove the primary Region with this operation. Instead, use the
 *         <code>DeleteDirectory</code> API.</p>
 */
export class RemoveRegionCommand extends $Command<
  RemoveRegionCommandInput,
  RemoveRegionCommandOutput,
  DirectoryServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RemoveRegionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectoryServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RemoveRegionCommandInput, RemoveRegionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectoryServiceClient";
    const commandName = "RemoveRegionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RemoveRegionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RemoveRegionResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RemoveRegionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RemoveRegionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RemoveRegionCommandOutput> {
    return deserializeAws_json1_1RemoveRegionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
