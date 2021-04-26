import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient.ts";
import { DescribeRecoveryPointInput, DescribeRecoveryPointOutput } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DescribeRecoveryPointCommand,
  serializeAws_restJson1DescribeRecoveryPointCommand,
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

export interface DescribeRecoveryPointCommandInput extends DescribeRecoveryPointInput {}
export interface DescribeRecoveryPointCommandOutput extends DescribeRecoveryPointOutput, __MetadataBearer {}

/**
 * <p>Returns metadata associated with a recovery point, including ID, status, encryption, and
 *          lifecycle.</p>
 */
export class DescribeRecoveryPointCommand extends $Command<
  DescribeRecoveryPointCommandInput,
  DescribeRecoveryPointCommandOutput,
  BackupClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeRecoveryPointCommandInput) {
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
  ): Handler<DescribeRecoveryPointCommandInput, DescribeRecoveryPointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "DescribeRecoveryPointCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeRecoveryPointInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeRecoveryPointOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeRecoveryPointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeRecoveryPointCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeRecoveryPointCommandOutput> {
    return deserializeAws_restJson1DescribeRecoveryPointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
