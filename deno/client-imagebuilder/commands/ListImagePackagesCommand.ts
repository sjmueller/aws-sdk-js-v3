import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient.ts";
import { ListImagePackagesRequest, ListImagePackagesResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListImagePackagesCommand,
  serializeAws_restJson1ListImagePackagesCommand,
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

export interface ListImagePackagesCommandInput extends ListImagePackagesRequest {}
export interface ListImagePackagesCommandOutput extends ListImagePackagesResponse, __MetadataBearer {}

/**
 * <p>List the Packages that are associated with an Image Build Version, as determined by Amazon EC2 Systems Manager Inventory at build time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, ListImagePackagesCommand } from "../../client-imagebuilder/mod.ts";
 * // const { ImagebuilderClient, ListImagePackagesCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new ListImagePackagesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListImagePackagesCommandInput} for command's `input` shape.
 * @see {@link ListImagePackagesCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListImagePackagesCommand extends $Command<
  ListImagePackagesCommandInput,
  ListImagePackagesCommandOutput,
  ImagebuilderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListImagePackagesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ImagebuilderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListImagePackagesCommandInput, ListImagePackagesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ImagebuilderClient";
    const commandName = "ListImagePackagesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListImagePackagesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListImagePackagesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListImagePackagesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListImagePackagesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListImagePackagesCommandOutput> {
    return deserializeAws_restJson1ListImagePackagesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
