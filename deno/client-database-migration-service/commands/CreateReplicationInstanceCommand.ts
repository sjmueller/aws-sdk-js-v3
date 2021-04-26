import {
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient.ts";
import { CreateReplicationInstanceMessage, CreateReplicationInstanceResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1CreateReplicationInstanceCommand,
  serializeAws_json1_1CreateReplicationInstanceCommand,
} from "../protocols/Aws_json1_1.ts";
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

export interface CreateReplicationInstanceCommandInput extends CreateReplicationInstanceMessage {}
export interface CreateReplicationInstanceCommandOutput extends CreateReplicationInstanceResponse, __MetadataBearer {}

/**
 * <p>Creates the replication instance using the specified parameters.</p>
 *          <p>AWS DMS requires that your account have certain roles with appropriate permissions
 *          before you can create a replication instance. For information on the required roles, see
 *       <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#CHAP_Security.APIRole">Creating the IAM Roles to Use With the AWS CLI and AWS DMS API</a>. For
 *          information on the required permissions, see
 *       <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#CHAP_Security.IAMPermissions">IAM Permissions Needed to Use AWS DMS</a>.</p>
 */
export class CreateReplicationInstanceCommand extends $Command<
  CreateReplicationInstanceCommandInput,
  CreateReplicationInstanceCommandOutput,
  DatabaseMigrationServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateReplicationInstanceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DatabaseMigrationServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateReplicationInstanceCommandInput, CreateReplicationInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "CreateReplicationInstanceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateReplicationInstanceMessage.filterSensitiveLog,
      outputFilterSensitiveLog: CreateReplicationInstanceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateReplicationInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateReplicationInstanceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateReplicationInstanceCommandOutput> {
    return deserializeAws_json1_1CreateReplicationInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
