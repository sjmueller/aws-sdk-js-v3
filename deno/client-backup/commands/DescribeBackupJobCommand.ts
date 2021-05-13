import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient.ts";
import { DescribeBackupJobInput, DescribeBackupJobOutput } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DescribeBackupJobCommand,
  serializeAws_restJson1DescribeBackupJobCommand,
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

export interface DescribeBackupJobCommandInput extends DescribeBackupJobInput {}
export interface DescribeBackupJobCommandOutput extends DescribeBackupJobOutput, __MetadataBearer {}

/**
 * <p>Returns backup job details for the specified <code>BackupJobId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, DescribeBackupJobCommand } from "../../client-backup/mod.ts";
 * // const { BackupClient, DescribeBackupJobCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new DescribeBackupJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeBackupJobCommandInput} for command's `input` shape.
 * @see {@link DescribeBackupJobCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeBackupJobCommand extends $Command<
  DescribeBackupJobCommandInput,
  DescribeBackupJobCommandOutput,
  BackupClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeBackupJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BackupClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeBackupJobCommandInput, DescribeBackupJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "DescribeBackupJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeBackupJobInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeBackupJobOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeBackupJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeBackupJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeBackupJobCommandOutput> {
    return deserializeAws_restJson1DescribeBackupJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
