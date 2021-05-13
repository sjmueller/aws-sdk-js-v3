import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient.ts";
import { InvalidateProjectCacheInput, InvalidateProjectCacheOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1InvalidateProjectCacheCommand,
  serializeAws_json1_1InvalidateProjectCacheCommand,
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

export interface InvalidateProjectCacheCommandInput extends InvalidateProjectCacheInput {}
export interface InvalidateProjectCacheCommandOutput extends InvalidateProjectCacheOutput, __MetadataBearer {}

/**
 * <p>Resets the cache for a project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, InvalidateProjectCacheCommand } from "../../client-codebuild/mod.ts";
 * // const { CodeBuildClient, InvalidateProjectCacheCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new InvalidateProjectCacheCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link InvalidateProjectCacheCommandInput} for command's `input` shape.
 * @see {@link InvalidateProjectCacheCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class InvalidateProjectCacheCommand extends $Command<
  InvalidateProjectCacheCommandInput,
  InvalidateProjectCacheCommandOutput,
  CodeBuildClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: InvalidateProjectCacheCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeBuildClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<InvalidateProjectCacheCommandInput, InvalidateProjectCacheCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeBuildClient";
    const commandName = "InvalidateProjectCacheCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: InvalidateProjectCacheInput.filterSensitiveLog,
      outputFilterSensitiveLog: InvalidateProjectCacheOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: InvalidateProjectCacheCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1InvalidateProjectCacheCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<InvalidateProjectCacheCommandOutput> {
    return deserializeAws_json1_1InvalidateProjectCacheCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
