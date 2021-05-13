import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient.ts";
import { GetSegmentExportJobsRequest, GetSegmentExportJobsResponse } from "../models/models_1.ts";
import {
  deserializeAws_restJson1GetSegmentExportJobsCommand,
  serializeAws_restJson1GetSegmentExportJobsCommand,
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

export interface GetSegmentExportJobsCommandInput extends GetSegmentExportJobsRequest {}
export interface GetSegmentExportJobsCommandOutput extends GetSegmentExportJobsResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about the status and settings of the export jobs for a segment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetSegmentExportJobsCommand } from "../../client-pinpoint/mod.ts";
 * // const { PinpointClient, GetSegmentExportJobsCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetSegmentExportJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSegmentExportJobsCommandInput} for command's `input` shape.
 * @see {@link GetSegmentExportJobsCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetSegmentExportJobsCommand extends $Command<
  GetSegmentExportJobsCommandInput,
  GetSegmentExportJobsCommandOutput,
  PinpointClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetSegmentExportJobsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSegmentExportJobsCommandInput, GetSegmentExportJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointClient";
    const commandName = "GetSegmentExportJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetSegmentExportJobsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetSegmentExportJobsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetSegmentExportJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetSegmentExportJobsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSegmentExportJobsCommandOutput> {
    return deserializeAws_restJson1GetSegmentExportJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
