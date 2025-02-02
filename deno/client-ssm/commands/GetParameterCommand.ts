import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient.ts";
import { GetParameterRequest, GetParameterResult } from "../models/models_1.ts";
import {
  deserializeAws_json1_1GetParameterCommand,
  serializeAws_json1_1GetParameterCommand,
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

export interface GetParameterCommandInput extends GetParameterRequest {}
export interface GetParameterCommandOutput extends GetParameterResult, __MetadataBearer {}

/**
 * <p>Get information about a parameter by using the parameter name. Don't confuse this API
 *    operation with the <a>GetParameters</a> API operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetParameterCommand } from "../../client-ssm/mod.ts";
 * // const { SSMClient, GetParameterCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new GetParameterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetParameterCommandInput} for command's `input` shape.
 * @see {@link GetParameterCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetParameterCommand extends $Command<
  GetParameterCommandInput,
  GetParameterCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetParameterCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetParameterCommandInput, GetParameterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "GetParameterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetParameterRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetParameterResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetParameterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetParameterCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetParameterCommandOutput> {
    return deserializeAws_json1_1GetParameterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
