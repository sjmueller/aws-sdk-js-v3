import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient.ts";
import { RestoreDBInstanceFromS3Message, RestoreDBInstanceFromS3Result } from "../models/models_1.ts";
import {
  deserializeAws_queryRestoreDBInstanceFromS3Command,
  serializeAws_queryRestoreDBInstanceFromS3Command,
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

export interface RestoreDBInstanceFromS3CommandInput extends RestoreDBInstanceFromS3Message {}
export interface RestoreDBInstanceFromS3CommandOutput extends RestoreDBInstanceFromS3Result, __MetadataBearer {}

/**
 * <p>Amazon Relational Database Service (Amazon RDS)
 *             supports importing MySQL databases by using backup files.
 *             You can create a backup of your on-premises database,
 *             store it on Amazon Simple Storage Service (Amazon S3),
 *             and then restore the backup file onto a new Amazon RDS DB instance running MySQL.
 *             For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/MySQL.Procedural.Importing.html">Importing Data into an Amazon RDS MySQL DB Instance</a>
 *             in the <i>Amazon RDS User Guide.</i>
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, RestoreDBInstanceFromS3Command } from "../../client-rds/mod.ts";
 * // const { RDSClient, RestoreDBInstanceFromS3Command } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new RestoreDBInstanceFromS3Command(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RestoreDBInstanceFromS3CommandInput} for command's `input` shape.
 * @see {@link RestoreDBInstanceFromS3CommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class RestoreDBInstanceFromS3Command extends $Command<
  RestoreDBInstanceFromS3CommandInput,
  RestoreDBInstanceFromS3CommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RestoreDBInstanceFromS3CommandInput) {
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
  ): Handler<RestoreDBInstanceFromS3CommandInput, RestoreDBInstanceFromS3CommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "RestoreDBInstanceFromS3Command";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RestoreDBInstanceFromS3Message.filterSensitiveLog,
      outputFilterSensitiveLog: RestoreDBInstanceFromS3Result.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RestoreDBInstanceFromS3CommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryRestoreDBInstanceFromS3Command(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RestoreDBInstanceFromS3CommandOutput> {
    return deserializeAws_queryRestoreDBInstanceFromS3Command(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
