import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient.ts";
import { ListReceivedGrantsRequest, ListReceivedGrantsResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListReceivedGrantsCommand,
  serializeAws_json1_1ListReceivedGrantsCommand,
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

export interface ListReceivedGrantsCommandInput extends ListReceivedGrantsRequest {}
export interface ListReceivedGrantsCommandOutput extends ListReceivedGrantsResponse, __MetadataBearer {}

/**
 * <p>Lists grants that are received but not accepted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, ListReceivedGrantsCommand } from "../../client-license-manager/mod.ts";
 * // const { LicenseManagerClient, ListReceivedGrantsCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new ListReceivedGrantsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListReceivedGrantsCommandInput} for command's `input` shape.
 * @see {@link ListReceivedGrantsCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListReceivedGrantsCommand extends $Command<
  ListReceivedGrantsCommandInput,
  ListReceivedGrantsCommandOutput,
  LicenseManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListReceivedGrantsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LicenseManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListReceivedGrantsCommandInput, ListReceivedGrantsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LicenseManagerClient";
    const commandName = "ListReceivedGrantsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListReceivedGrantsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListReceivedGrantsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListReceivedGrantsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListReceivedGrantsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListReceivedGrantsCommandOutput> {
    return deserializeAws_json1_1ListReceivedGrantsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
