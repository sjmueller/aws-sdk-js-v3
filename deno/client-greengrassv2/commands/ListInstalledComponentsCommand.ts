import { GreengrassV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassV2Client.ts";
import { ListInstalledComponentsRequest, ListInstalledComponentsResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListInstalledComponentsCommand,
  serializeAws_restJson1ListInstalledComponentsCommand,
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

export interface ListInstalledComponentsCommandInput extends ListInstalledComponentsRequest {}
export interface ListInstalledComponentsCommandOutput extends ListInstalledComponentsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a paginated list of the components that a AWS IoT Greengrass core device runs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassV2Client, ListInstalledComponentsCommand } from "../../client-greengrassv2/mod.ts";
 * // const { GreengrassV2Client, ListInstalledComponentsCommand } = require("@aws-sdk/client-greengrassv2"); // CommonJS import
 * const client = new GreengrassV2Client(config);
 * const command = new ListInstalledComponentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListInstalledComponentsCommandInput} for command's `input` shape.
 * @see {@link ListInstalledComponentsCommandOutput} for command's `response` shape.
 * @see {@link GreengrassV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListInstalledComponentsCommand extends $Command<
  ListInstalledComponentsCommandInput,
  ListInstalledComponentsCommandOutput,
  GreengrassV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListInstalledComponentsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GreengrassV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListInstalledComponentsCommandInput, ListInstalledComponentsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassV2Client";
    const commandName = "ListInstalledComponentsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListInstalledComponentsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListInstalledComponentsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListInstalledComponentsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListInstalledComponentsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListInstalledComponentsCommandOutput> {
    return deserializeAws_restJson1ListInstalledComponentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
