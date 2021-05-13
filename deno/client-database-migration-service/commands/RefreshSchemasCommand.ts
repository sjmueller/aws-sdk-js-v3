import {
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient.ts";
import { RefreshSchemasMessage, RefreshSchemasResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1RefreshSchemasCommand,
  serializeAws_json1_1RefreshSchemasCommand,
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

export interface RefreshSchemasCommandInput extends RefreshSchemasMessage {}
export interface RefreshSchemasCommandOutput extends RefreshSchemasResponse, __MetadataBearer {}

/**
 * <p>Populates the schema for the specified endpoint. This is an asynchronous operation and
 *          can take several minutes. You can check the status of this operation by calling the
 *          DescribeRefreshSchemasStatus operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, RefreshSchemasCommand } from "../../client-database-migration-service/mod.ts";
 * // const { DatabaseMigrationServiceClient, RefreshSchemasCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new RefreshSchemasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RefreshSchemasCommandInput} for command's `input` shape.
 * @see {@link RefreshSchemasCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class RefreshSchemasCommand extends $Command<
  RefreshSchemasCommandInput,
  RefreshSchemasCommandOutput,
  DatabaseMigrationServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RefreshSchemasCommandInput) {
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
  ): Handler<RefreshSchemasCommandInput, RefreshSchemasCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "RefreshSchemasCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RefreshSchemasMessage.filterSensitiveLog,
      outputFilterSensitiveLog: RefreshSchemasResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RefreshSchemasCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RefreshSchemasCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RefreshSchemasCommandOutput> {
    return deserializeAws_json1_1RefreshSchemasCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
