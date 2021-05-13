import { MobileClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MobileClient.ts";
import { ExportBundleRequest, ExportBundleResult } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ExportBundleCommand,
  serializeAws_restJson1ExportBundleCommand,
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

export interface ExportBundleCommandInput extends ExportBundleRequest {}
export interface ExportBundleCommandOutput extends ExportBundleResult, __MetadataBearer {}

/**
 * <p>
 *             Generates customized software development kit (SDK) and or tool packages
 *             used to integrate mobile web or mobile app clients with backend AWS resources.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MobileClient, ExportBundleCommand } from "../../client-mobile/mod.ts";
 * // const { MobileClient, ExportBundleCommand } = require("@aws-sdk/client-mobile"); // CommonJS import
 * const client = new MobileClient(config);
 * const command = new ExportBundleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExportBundleCommandInput} for command's `input` shape.
 * @see {@link ExportBundleCommandOutput} for command's `response` shape.
 * @see {@link MobileClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ExportBundleCommand extends $Command<
  ExportBundleCommandInput,
  ExportBundleCommandOutput,
  MobileClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ExportBundleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MobileClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ExportBundleCommandInput, ExportBundleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MobileClient";
    const commandName = "ExportBundleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ExportBundleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ExportBundleResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ExportBundleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ExportBundleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ExportBundleCommandOutput> {
    return deserializeAws_restJson1ExportBundleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
