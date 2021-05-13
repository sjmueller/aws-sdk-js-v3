import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client.ts";
import { CancelExportTaskRequest } from "../models/models_0.ts";
import {
  deserializeAws_ec2CancelExportTaskCommand,
  serializeAws_ec2CancelExportTaskCommand,
} from "../protocols/Aws_ec2.ts";
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

export interface CancelExportTaskCommandInput extends CancelExportTaskRequest {}
export interface CancelExportTaskCommandOutput extends __MetadataBearer {}

/**
 * <p>Cancels an active export task. The request removes all artifacts of the export, including any partially-created
 *    Amazon S3 objects. If the export task is complete or is in the process of transferring the final disk image, the
 *    command fails and returns an error.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CancelExportTaskCommand } from "../../client-ec2/mod.ts";
 * // const { EC2Client, CancelExportTaskCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CancelExportTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelExportTaskCommandInput} for command's `input` shape.
 * @see {@link CancelExportTaskCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CancelExportTaskCommand extends $Command<
  CancelExportTaskCommandInput,
  CancelExportTaskCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CancelExportTaskCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CancelExportTaskCommandInput, CancelExportTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CancelExportTaskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CancelExportTaskRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CancelExportTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2CancelExportTaskCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CancelExportTaskCommandOutput> {
    return deserializeAws_ec2CancelExportTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
