import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient.ts";
import { GetEnabledStandardsRequest, GetEnabledStandardsResponse } from "../models/models_1.ts";
import {
  deserializeAws_restJson1GetEnabledStandardsCommand,
  serializeAws_restJson1GetEnabledStandardsCommand,
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

export interface GetEnabledStandardsCommandInput extends GetEnabledStandardsRequest {}
export interface GetEnabledStandardsCommandOutput extends GetEnabledStandardsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of the standards that are currently enabled.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, GetEnabledStandardsCommand } from "../../client-securityhub/mod.ts";
 * // const { SecurityHubClient, GetEnabledStandardsCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new GetEnabledStandardsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetEnabledStandardsCommandInput} for command's `input` shape.
 * @see {@link GetEnabledStandardsCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetEnabledStandardsCommand extends $Command<
  GetEnabledStandardsCommandInput,
  GetEnabledStandardsCommandOutput,
  SecurityHubClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetEnabledStandardsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecurityHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetEnabledStandardsCommandInput, GetEnabledStandardsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "GetEnabledStandardsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetEnabledStandardsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetEnabledStandardsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetEnabledStandardsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetEnabledStandardsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetEnabledStandardsCommandOutput> {
    return deserializeAws_restJson1GetEnabledStandardsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
