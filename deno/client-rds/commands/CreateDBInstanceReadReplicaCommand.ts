import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient.ts";
import { CreateDBInstanceReadReplicaMessage, CreateDBInstanceReadReplicaResult } from "../models/models_0.ts";
import {
  deserializeAws_queryCreateDBInstanceReadReplicaCommand,
  serializeAws_queryCreateDBInstanceReadReplicaCommand,
} from "../protocols/Aws_query.ts";
import { getCrossRegionPresignedUrlPlugin } from "../../middleware-sdk-rds/mod.ts";
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

export interface CreateDBInstanceReadReplicaCommandInput extends CreateDBInstanceReadReplicaMessage {}
export interface CreateDBInstanceReadReplicaCommandOutput extends CreateDBInstanceReadReplicaResult, __MetadataBearer {}

/**
 * <p>Creates a new DB instance that acts as a read replica for an existing source DB
 *             instance. You can create a read replica for a DB instance running MySQL, MariaDB,
 *             Oracle, PostgreSQL, or SQL Server. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html">Working with Read
 *                 Replicas</a> in the <i>Amazon RDS User Guide</i>. </p>
 *
 *          <p>Amazon Aurora doesn't support this action. Call the <code>CreateDBInstance</code>
 *             action to create a DB instance for an Aurora DB cluster.</p>
 *
 *          <p>All read replica DB instances are created with backups disabled. All other DB
 *             instance attributes (including DB security groups and DB parameter groups) are inherited
 *             from the source DB instance, except as specified.</p>
 *
 *          <important>
 *             <p>Your source DB instance must have backup retention enabled.
 *          </p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CreateDBInstanceReadReplicaCommand } from "../../client-rds/mod.ts";
 * // const { RDSClient, CreateDBInstanceReadReplicaCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new CreateDBInstanceReadReplicaCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDBInstanceReadReplicaCommandInput} for command's `input` shape.
 * @see {@link CreateDBInstanceReadReplicaCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateDBInstanceReadReplicaCommand extends $Command<
  CreateDBInstanceReadReplicaCommandInput,
  CreateDBInstanceReadReplicaCommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateDBInstanceReadReplicaCommandInput) {
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
  ): Handler<CreateDBInstanceReadReplicaCommandInput, CreateDBInstanceReadReplicaCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getCrossRegionPresignedUrlPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "CreateDBInstanceReadReplicaCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDBInstanceReadReplicaMessage.filterSensitiveLog,
      outputFilterSensitiveLog: CreateDBInstanceReadReplicaResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateDBInstanceReadReplicaCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateDBInstanceReadReplicaCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateDBInstanceReadReplicaCommandOutput> {
    return deserializeAws_queryCreateDBInstanceReadReplicaCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
