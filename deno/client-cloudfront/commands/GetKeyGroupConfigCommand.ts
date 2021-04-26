import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient.ts";
import { GetKeyGroupConfigRequest, GetKeyGroupConfigResult } from "../models/models_0.ts";
import {
  deserializeAws_restXmlGetKeyGroupConfigCommand,
  serializeAws_restXmlGetKeyGroupConfigCommand,
} from "../protocols/Aws_restXml.ts";
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

export interface GetKeyGroupConfigCommandInput extends GetKeyGroupConfigRequest {}
export interface GetKeyGroupConfigCommandOutput extends GetKeyGroupConfigResult, __MetadataBearer {}

/**
 * <p>Gets a key group configuration.</p>
 * 		       <p>To get a key group configuration, you must provide the key group’s identifier. If the
 * 			key group is referenced in a distribution’s cache behavior, you can get the key group’s
 * 			identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the
 * 			key group is not referenced in a cache behavior, you can get the identifier using
 * 			<code>ListKeyGroups</code>.</p>
 */
export class GetKeyGroupConfigCommand extends $Command<
  GetKeyGroupConfigCommandInput,
  GetKeyGroupConfigCommandOutput,
  CloudFrontClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetKeyGroupConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetKeyGroupConfigCommandInput, GetKeyGroupConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "GetKeyGroupConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetKeyGroupConfigRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetKeyGroupConfigResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetKeyGroupConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlGetKeyGroupConfigCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetKeyGroupConfigCommandOutput> {
    return deserializeAws_restXmlGetKeyGroupConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
