import { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient.ts";
import { GetFolderPathRequest, GetFolderPathResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetFolderPathCommand,
  serializeAws_restJson1GetFolderPathCommand,
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

export interface GetFolderPathCommandInput extends GetFolderPathRequest {}
export interface GetFolderPathCommandOutput extends GetFolderPathResponse, __MetadataBearer {}

/**
 * <p>Retrieves the path information (the hierarchy from the root folder) for the
 *             specified folder.</p>
 *         <p>By default, Amazon WorkDocs returns a maximum of 100 levels upwards from the
 *             requested folder and only includes the IDs of the parent folders in the path. You can
 *             limit the maximum number of levels. You can also request the parent folder
 *             names.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, GetFolderPathCommand } from "../../client-workdocs/mod.ts";
 * // const { WorkDocsClient, GetFolderPathCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const command = new GetFolderPathCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetFolderPathCommandInput} for command's `input` shape.
 * @see {@link GetFolderPathCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetFolderPathCommand extends $Command<
  GetFolderPathCommandInput,
  GetFolderPathCommandOutput,
  WorkDocsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetFolderPathCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkDocsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetFolderPathCommandInput, GetFolderPathCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkDocsClient";
    const commandName = "GetFolderPathCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetFolderPathRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetFolderPathResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetFolderPathCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetFolderPathCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetFolderPathCommandOutput> {
    return deserializeAws_restJson1GetFolderPathCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
