import { ServiceInputTypes, ServiceOutputTypes, TimestreamWriteClientResolvedConfig } from "../TimestreamWriteClient.ts";
import { DeleteDatabaseRequest } from "../models/models_0.ts";
import {
  deserializeAws_json1_0DeleteDatabaseCommand,
  serializeAws_json1_0DeleteDatabaseCommand,
} from "../protocols/Aws_json1_0.ts";
import { getEndpointDiscoveryPlugin } from "../../middleware-endpoint-discovery/mod.ts";
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

export interface DeleteDatabaseCommandInput extends DeleteDatabaseRequest {}
export interface DeleteDatabaseCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a given Timestream database. <i>This is an irreversible operation.
 *       After a database is deleted, the time series data from its tables cannot be recovered.</i>
 *          </p>
 *
 *          <p>All tables in the database must be deleted first, or a ValidationException error will be thrown.
 *       </p>
 *
 *          <p>Due to the nature of distributed retries,
 *          the operation can return either success or a ResourceNotFoundException. Clients should consider them equivalent.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamWriteClient, DeleteDatabaseCommand } from "../../client-timestream-write/mod.ts";
 * // const { TimestreamWriteClient, DeleteDatabaseCommand } = require("@aws-sdk/client-timestream-write"); // CommonJS import
 * const client = new TimestreamWriteClient(config);
 * const command = new DeleteDatabaseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDatabaseCommandInput} for command's `input` shape.
 * @see {@link DeleteDatabaseCommandOutput} for command's `response` shape.
 * @see {@link TimestreamWriteClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteDatabaseCommand extends $Command<
  DeleteDatabaseCommandInput,
  DeleteDatabaseCommandOutput,
  TimestreamWriteClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteDatabaseCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TimestreamWriteClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteDatabaseCommandInput, DeleteDatabaseCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointDiscoveryPlugin(configuration, { clientStack, options, isDiscoveredEndpointRequired: true })
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TimestreamWriteClient";
    const commandName = "DeleteDatabaseCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteDatabaseRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteDatabaseCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0DeleteDatabaseCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteDatabaseCommandOutput> {
    return deserializeAws_json1_0DeleteDatabaseCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
