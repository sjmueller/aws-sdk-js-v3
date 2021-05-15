import { FinspaceDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceDataClient.ts";
import { GetWorkingLocationRequest, GetWorkingLocationResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetWorkingLocationCommand,
  serializeAws_restJson1GetWorkingLocationCommand,
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

export interface GetWorkingLocationCommandInput extends GetWorkingLocationRequest {}
export interface GetWorkingLocationCommandOutput extends GetWorkingLocationResponse, __MetadataBearer {}

/**
 * <p>A temporary Amazon S3 location to copy your files from a source location to stage or use
 *       as a scratch space in Habanero notebook.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceDataClient, GetWorkingLocationCommand } from "../../client-finspace-data/mod.ts";
 * // const { FinspaceDataClient, GetWorkingLocationCommand } = require("@aws-sdk/client-finspace-data"); // CommonJS import
 * const client = new FinspaceDataClient(config);
 * const command = new GetWorkingLocationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetWorkingLocationCommandInput} for command's `input` shape.
 * @see {@link GetWorkingLocationCommandOutput} for command's `response` shape.
 * @see {@link FinspaceDataClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetWorkingLocationCommand extends $Command<
  GetWorkingLocationCommandInput,
  GetWorkingLocationCommandOutput,
  FinspaceDataClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetWorkingLocationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FinspaceDataClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetWorkingLocationCommandInput, GetWorkingLocationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FinspaceDataClient";
    const commandName = "GetWorkingLocationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetWorkingLocationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetWorkingLocationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetWorkingLocationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetWorkingLocationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetWorkingLocationCommandOutput> {
    return deserializeAws_restJson1GetWorkingLocationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
