import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient.ts";
import { GetExclusionsPreviewRequest, GetExclusionsPreviewResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1GetExclusionsPreviewCommand,
  serializeAws_json1_1GetExclusionsPreviewCommand,
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

export interface GetExclusionsPreviewCommandInput extends GetExclusionsPreviewRequest {}
export interface GetExclusionsPreviewCommandOutput extends GetExclusionsPreviewResponse, __MetadataBearer {}

/**
 * <p>Retrieves the exclusions preview (a list of ExclusionPreview objects) specified by
 *          the preview token. You can obtain the preview token by running the CreateExclusionsPreview
 *          API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, GetExclusionsPreviewCommand } from "../../client-inspector/mod.ts";
 * // const { InspectorClient, GetExclusionsPreviewCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const command = new GetExclusionsPreviewCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetExclusionsPreviewCommandInput} for command's `input` shape.
 * @see {@link GetExclusionsPreviewCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetExclusionsPreviewCommand extends $Command<
  GetExclusionsPreviewCommandInput,
  GetExclusionsPreviewCommandOutput,
  InspectorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetExclusionsPreviewCommandInput) {
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
  ): Handler<GetExclusionsPreviewCommandInput, GetExclusionsPreviewCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "InspectorClient";
    const commandName = "GetExclusionsPreviewCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetExclusionsPreviewRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetExclusionsPreviewResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetExclusionsPreviewCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetExclusionsPreviewCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetExclusionsPreviewCommandOutput> {
    return deserializeAws_json1_1GetExclusionsPreviewCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
