import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient.ts";
import { GetCloudFormationStackRecordsRequest, GetCloudFormationStackRecordsResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1GetCloudFormationStackRecordsCommand,
  serializeAws_json1_1GetCloudFormationStackRecordsCommand,
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

export interface GetCloudFormationStackRecordsCommandInput extends GetCloudFormationStackRecordsRequest {}
export interface GetCloudFormationStackRecordsCommandOutput
  extends GetCloudFormationStackRecordsResult,
    __MetadataBearer {}

/**
 * <p>Returns the CloudFormation stack record created as a result of the <code>create cloud
 *         formation stack</code> operation.</p>
 *          <p>An AWS CloudFormation stack is used to create a new Amazon EC2 instance from an exported Lightsail
 *       snapshot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetCloudFormationStackRecordsCommand } from "../../client-lightsail/mod.ts";
 * // const { LightsailClient, GetCloudFormationStackRecordsCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetCloudFormationStackRecordsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCloudFormationStackRecordsCommandInput} for command's `input` shape.
 * @see {@link GetCloudFormationStackRecordsCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetCloudFormationStackRecordsCommand extends $Command<
  GetCloudFormationStackRecordsCommandInput,
  GetCloudFormationStackRecordsCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetCloudFormationStackRecordsCommandInput) {
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
  ): Handler<GetCloudFormationStackRecordsCommandInput, GetCloudFormationStackRecordsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "GetCloudFormationStackRecordsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetCloudFormationStackRecordsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetCloudFormationStackRecordsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetCloudFormationStackRecordsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetCloudFormationStackRecordsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetCloudFormationStackRecordsCommandOutput> {
    return deserializeAws_json1_1GetCloudFormationStackRecordsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
