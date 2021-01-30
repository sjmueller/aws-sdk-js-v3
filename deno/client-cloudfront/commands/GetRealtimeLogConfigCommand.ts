import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient.ts";
import { GetRealtimeLogConfigRequest } from "../models/models_0.ts";
import { GetRealtimeLogConfigResult } from "../models/models_1.ts";
import {
  deserializeAws_restXmlGetRealtimeLogConfigCommand,
  serializeAws_restXmlGetRealtimeLogConfigCommand,
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

export type GetRealtimeLogConfigCommandInput = GetRealtimeLogConfigRequest;
export type GetRealtimeLogConfigCommandOutput = GetRealtimeLogConfigResult & __MetadataBearer;

/**
 * <p>Gets a real-time log configuration.</p>
 * 		       <p>To get a real-time log configuration, you can provide the configuration’s name or its Amazon
 * 			Resource Name (ARN). You must provide at least one. If you provide both, CloudFront uses the
 * 			name to identify the real-time log configuration to get.</p>
 */
export class GetRealtimeLogConfigCommand extends $Command<
  GetRealtimeLogConfigCommandInput,
  GetRealtimeLogConfigCommandOutput,
  CloudFrontClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetRealtimeLogConfigCommandInput) {
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
  ): Handler<GetRealtimeLogConfigCommandInput, GetRealtimeLogConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "GetRealtimeLogConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetRealtimeLogConfigRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetRealtimeLogConfigResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetRealtimeLogConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlGetRealtimeLogConfigCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetRealtimeLogConfigCommandOutput> {
    return deserializeAws_restXmlGetRealtimeLogConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
