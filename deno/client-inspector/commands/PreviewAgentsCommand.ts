import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient.ts";
import { PreviewAgentsRequest, PreviewAgentsResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1PreviewAgentsCommand,
  serializeAws_json1_1PreviewAgentsCommand,
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

export interface PreviewAgentsCommandInput extends PreviewAgentsRequest {}
export interface PreviewAgentsCommandOutput extends PreviewAgentsResponse, __MetadataBearer {}

/**
 * <p>Previews the agents installed on the EC2 instances that are part of the specified
 *          assessment target.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, PreviewAgentsCommand } from "../../client-inspector/mod.ts";
 * // const { InspectorClient, PreviewAgentsCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const command = new PreviewAgentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PreviewAgentsCommandInput} for command's `input` shape.
 * @see {@link PreviewAgentsCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class PreviewAgentsCommand extends $Command<
  PreviewAgentsCommandInput,
  PreviewAgentsCommandOutput,
  InspectorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PreviewAgentsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: InspectorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PreviewAgentsCommandInput, PreviewAgentsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "InspectorClient";
    const commandName = "PreviewAgentsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PreviewAgentsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PreviewAgentsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PreviewAgentsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PreviewAgentsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PreviewAgentsCommandOutput> {
    return deserializeAws_json1_1PreviewAgentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
