import { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient.ts";
import { ListPackageVersionAssetsRequest, ListPackageVersionAssetsResult } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListPackageVersionAssetsCommand,
  serializeAws_restJson1ListPackageVersionAssetsCommand,
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

export interface ListPackageVersionAssetsCommandInput extends ListPackageVersionAssetsRequest {}
export interface ListPackageVersionAssetsCommandOutput extends ListPackageVersionAssetsResult, __MetadataBearer {}

/**
 * <p>
 *        Returns a list of
 *        <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_AssetSummary.html">AssetSummary</a>
 *        objects for assets in a package version.
 *      </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, ListPackageVersionAssetsCommand } from "../../client-codeartifact/mod.ts";
 * // const { CodeartifactClient, ListPackageVersionAssetsCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * const client = new CodeartifactClient(config);
 * const command = new ListPackageVersionAssetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPackageVersionAssetsCommandInput} for command's `input` shape.
 * @see {@link ListPackageVersionAssetsCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListPackageVersionAssetsCommand extends $Command<
  ListPackageVersionAssetsCommandInput,
  ListPackageVersionAssetsCommandOutput,
  CodeartifactClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListPackageVersionAssetsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeartifactClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListPackageVersionAssetsCommandInput, ListPackageVersionAssetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeartifactClient";
    const commandName = "ListPackageVersionAssetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListPackageVersionAssetsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListPackageVersionAssetsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListPackageVersionAssetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListPackageVersionAssetsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListPackageVersionAssetsCommandOutput> {
    return deserializeAws_restJson1ListPackageVersionAssetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
