import { AmplifyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyClient.ts";
import { ListAppsRequest, ListAppsResult } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListAppsCommand,
  serializeAws_restJson1ListAppsCommand,
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

export interface ListAppsCommandInput extends ListAppsRequest {}
export interface ListAppsCommandOutput extends ListAppsResult, __MetadataBearer {}

/**
 * <p> Returns a list of the existing Amplify apps. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyClient, ListAppsCommand } from "../../client-amplify/mod.ts";
 * // const { AmplifyClient, ListAppsCommand } = require("@aws-sdk/client-amplify"); // CommonJS import
 * const client = new AmplifyClient(config);
 * const command = new ListAppsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAppsCommandInput} for command's `input` shape.
 * @see {@link ListAppsCommandOutput} for command's `response` shape.
 * @see {@link AmplifyClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListAppsCommand extends $Command<
  ListAppsCommandInput,
  ListAppsCommandOutput,
  AmplifyClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListAppsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AmplifyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAppsCommandInput, ListAppsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AmplifyClient";
    const commandName = "ListAppsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAppsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListAppsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAppsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListAppsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAppsCommandOutput> {
    return deserializeAws_restJson1ListAppsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
