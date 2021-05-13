import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient.ts";
import { GetDifferencesInput, GetDifferencesOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1GetDifferencesCommand,
  serializeAws_json1_1GetDifferencesCommand,
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

export interface GetDifferencesCommandInput extends GetDifferencesInput {}
export interface GetDifferencesCommandOutput extends GetDifferencesOutput, __MetadataBearer {}

/**
 * <p>Returns information about the differences in a valid commit specifier (such as a
 *             branch, tag, HEAD, commit ID, or other fully qualified reference). Results can be
 *             limited to a specified path.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, GetDifferencesCommand } from "../../client-codecommit/mod.ts";
 * // const { CodeCommitClient, GetDifferencesCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new GetDifferencesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDifferencesCommandInput} for command's `input` shape.
 * @see {@link GetDifferencesCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetDifferencesCommand extends $Command<
  GetDifferencesCommandInput,
  GetDifferencesCommandOutput,
  CodeCommitClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetDifferencesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeCommitClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDifferencesCommandInput, GetDifferencesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCommitClient";
    const commandName = "GetDifferencesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDifferencesInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetDifferencesOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetDifferencesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetDifferencesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDifferencesCommandOutput> {
    return deserializeAws_json1_1GetDifferencesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
