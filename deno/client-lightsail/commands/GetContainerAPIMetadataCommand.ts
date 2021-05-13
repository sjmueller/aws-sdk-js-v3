import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient.ts";
import { GetContainerAPIMetadataRequest, GetContainerAPIMetadataResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1GetContainerAPIMetadataCommand,
  serializeAws_json1_1GetContainerAPIMetadataCommand,
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

export interface GetContainerAPIMetadataCommandInput extends GetContainerAPIMetadataRequest {}
export interface GetContainerAPIMetadataCommandOutput extends GetContainerAPIMetadataResult, __MetadataBearer {}

/**
 * <p>Returns information about Amazon Lightsail containers, such as the current version of the
 *       Lightsail Control (lightsailctl) plugin.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetContainerAPIMetadataCommand } from "../../client-lightsail/mod.ts";
 * // const { LightsailClient, GetContainerAPIMetadataCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetContainerAPIMetadataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetContainerAPIMetadataCommandInput} for command's `input` shape.
 * @see {@link GetContainerAPIMetadataCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetContainerAPIMetadataCommand extends $Command<
  GetContainerAPIMetadataCommandInput,
  GetContainerAPIMetadataCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetContainerAPIMetadataCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetContainerAPIMetadataCommandInput, GetContainerAPIMetadataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "GetContainerAPIMetadataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetContainerAPIMetadataRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetContainerAPIMetadataResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetContainerAPIMetadataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetContainerAPIMetadataCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetContainerAPIMetadataCommandOutput> {
    return deserializeAws_json1_1GetContainerAPIMetadataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
