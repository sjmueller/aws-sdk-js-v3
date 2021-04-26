import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient.ts";
import { DeleteNetworkProfileRequest, DeleteNetworkProfileResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DeleteNetworkProfileCommand,
  serializeAws_json1_1DeleteNetworkProfileCommand,
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

export interface DeleteNetworkProfileCommandInput extends DeleteNetworkProfileRequest {}
export interface DeleteNetworkProfileCommandOutput extends DeleteNetworkProfileResult, __MetadataBearer {}

/**
 * <p>Deletes a network profile.</p>
 */
export class DeleteNetworkProfileCommand extends $Command<
  DeleteNetworkProfileCommandInput,
  DeleteNetworkProfileCommandOutput,
  DeviceFarmClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteNetworkProfileCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DeviceFarmClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteNetworkProfileCommandInput, DeleteNetworkProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "DeleteNetworkProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteNetworkProfileRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteNetworkProfileResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteNetworkProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteNetworkProfileCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteNetworkProfileCommandOutput> {
    return deserializeAws_json1_1DeleteNetworkProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
