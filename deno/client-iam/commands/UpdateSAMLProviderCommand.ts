import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient.ts";
import { UpdateSAMLProviderRequest, UpdateSAMLProviderResponse } from "../models/models_1.ts";
import {
  deserializeAws_queryUpdateSAMLProviderCommand,
  serializeAws_queryUpdateSAMLProviderCommand,
} from "../protocols/Aws_query.ts";
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

export type UpdateSAMLProviderCommandInput = UpdateSAMLProviderRequest;
export type UpdateSAMLProviderCommandOutput = UpdateSAMLProviderResponse & __MetadataBearer;

/**
 * <p>Updates the metadata document for an existing SAML provider resource object.</p>
 *         <note>
 *             <p>This operation requires <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p>
 *         </note>
 */
export class UpdateSAMLProviderCommand extends $Command<
  UpdateSAMLProviderCommandInput,
  UpdateSAMLProviderCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateSAMLProviderCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateSAMLProviderCommandInput, UpdateSAMLProviderCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "UpdateSAMLProviderCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateSAMLProviderRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateSAMLProviderResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateSAMLProviderCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryUpdateSAMLProviderCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateSAMLProviderCommandOutput> {
    return deserializeAws_queryUpdateSAMLProviderCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
