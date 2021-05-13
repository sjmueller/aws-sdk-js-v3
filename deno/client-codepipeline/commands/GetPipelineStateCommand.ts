import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient.ts";
import { GetPipelineStateInput, GetPipelineStateOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1GetPipelineStateCommand,
  serializeAws_json1_1GetPipelineStateCommand,
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

export interface GetPipelineStateCommandInput extends GetPipelineStateInput {}
export interface GetPipelineStateCommandOutput extends GetPipelineStateOutput, __MetadataBearer {}

/**
 * <p>Returns information about the state of a pipeline, including the stages and
 *             actions.</p>
 *         <note>
 *             <p>Values returned in the <code>revisionId</code> and <code>revisionUrl</code>
 *                 fields indicate the source revision information, such as the commit ID, for the
 *                 current state.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, GetPipelineStateCommand } from "../../client-codepipeline/mod.ts";
 * // const { CodePipelineClient, GetPipelineStateCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const command = new GetPipelineStateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPipelineStateCommandInput} for command's `input` shape.
 * @see {@link GetPipelineStateCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetPipelineStateCommand extends $Command<
  GetPipelineStateCommandInput,
  GetPipelineStateCommandOutput,
  CodePipelineClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetPipelineStateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodePipelineClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetPipelineStateCommandInput, GetPipelineStateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodePipelineClient";
    const commandName = "GetPipelineStateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetPipelineStateInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetPipelineStateOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetPipelineStateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetPipelineStateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetPipelineStateCommandOutput> {
    return deserializeAws_json1_1GetPipelineStateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
