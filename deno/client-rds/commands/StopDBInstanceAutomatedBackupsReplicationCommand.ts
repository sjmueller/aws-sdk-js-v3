import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient.ts";
import {
  StopDBInstanceAutomatedBackupsReplicationMessage,
  StopDBInstanceAutomatedBackupsReplicationResult,
} from "../models/models_1.ts";
import {
  deserializeAws_queryStopDBInstanceAutomatedBackupsReplicationCommand,
  serializeAws_queryStopDBInstanceAutomatedBackupsReplicationCommand,
} from "../protocols/Aws_query.ts";
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

export interface StopDBInstanceAutomatedBackupsReplicationCommandInput
  extends StopDBInstanceAutomatedBackupsReplicationMessage {}
export interface StopDBInstanceAutomatedBackupsReplicationCommandOutput
  extends StopDBInstanceAutomatedBackupsReplicationResult,
    __MetadataBearer {}

/**
 * <p>Stops automated backup replication for a DB instance.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReplicateBackups.html">
 *             Replicating Automated Backups to Another AWS Region</a> in the <i>Amazon RDS User Guide.</i>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, StopDBInstanceAutomatedBackupsReplicationCommand } from "../../client-rds/mod.ts";
 * // const { RDSClient, StopDBInstanceAutomatedBackupsReplicationCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new StopDBInstanceAutomatedBackupsReplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopDBInstanceAutomatedBackupsReplicationCommandInput} for command's `input` shape.
 * @see {@link StopDBInstanceAutomatedBackupsReplicationCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class StopDBInstanceAutomatedBackupsReplicationCommand extends $Command<
  StopDBInstanceAutomatedBackupsReplicationCommandInput,
  StopDBInstanceAutomatedBackupsReplicationCommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StopDBInstanceAutomatedBackupsReplicationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    StopDBInstanceAutomatedBackupsReplicationCommandInput,
    StopDBInstanceAutomatedBackupsReplicationCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "StopDBInstanceAutomatedBackupsReplicationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopDBInstanceAutomatedBackupsReplicationMessage.filterSensitiveLog,
      outputFilterSensitiveLog: StopDBInstanceAutomatedBackupsReplicationResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: StopDBInstanceAutomatedBackupsReplicationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryStopDBInstanceAutomatedBackupsReplicationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StopDBInstanceAutomatedBackupsReplicationCommandOutput> {
    return deserializeAws_queryStopDBInstanceAutomatedBackupsReplicationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
