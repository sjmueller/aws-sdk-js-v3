import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient.ts";
import { AuthorizeIpRulesRequest, AuthorizeIpRulesResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1AuthorizeIpRulesCommand,
  serializeAws_json1_1AuthorizeIpRulesCommand,
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

export interface AuthorizeIpRulesCommandInput extends AuthorizeIpRulesRequest {}
export interface AuthorizeIpRulesCommandOutput extends AuthorizeIpRulesResult, __MetadataBearer {}

/**
 * <p>Adds one or more rules to the specified IP access control group.</p>
 *          <p>This action gives users permission to access their WorkSpaces from the CIDR address
 *          ranges specified in the rules.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, AuthorizeIpRulesCommand } from "../../client-workspaces/mod.ts";
 * // const { WorkSpacesClient, AuthorizeIpRulesCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new AuthorizeIpRulesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AuthorizeIpRulesCommandInput} for command's `input` shape.
 * @see {@link AuthorizeIpRulesCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class AuthorizeIpRulesCommand extends $Command<
  AuthorizeIpRulesCommandInput,
  AuthorizeIpRulesCommandOutput,
  WorkSpacesClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AuthorizeIpRulesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkSpacesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AuthorizeIpRulesCommandInput, AuthorizeIpRulesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesClient";
    const commandName = "AuthorizeIpRulesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AuthorizeIpRulesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AuthorizeIpRulesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AuthorizeIpRulesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AuthorizeIpRulesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AuthorizeIpRulesCommandOutput> {
    return deserializeAws_json1_1AuthorizeIpRulesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
