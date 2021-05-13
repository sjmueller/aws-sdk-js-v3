import { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient.ts";
import { GetSchemaCreationStatusRequest, GetSchemaCreationStatusResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetSchemaCreationStatusCommand,
  serializeAws_restJson1GetSchemaCreationStatusCommand,
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

export interface GetSchemaCreationStatusCommandInput extends GetSchemaCreationStatusRequest {}
export interface GetSchemaCreationStatusCommandOutput extends GetSchemaCreationStatusResponse, __MetadataBearer {}

/**
 * <p>Retrieves the current status of a schema creation operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, GetSchemaCreationStatusCommand } from "../../client-appsync/mod.ts";
 * // const { AppSyncClient, GetSchemaCreationStatusCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const command = new GetSchemaCreationStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSchemaCreationStatusCommandInput} for command's `input` shape.
 * @see {@link GetSchemaCreationStatusCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetSchemaCreationStatusCommand extends $Command<
  GetSchemaCreationStatusCommandInput,
  GetSchemaCreationStatusCommandOutput,
  AppSyncClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetSchemaCreationStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSchemaCreationStatusCommandInput, GetSchemaCreationStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppSyncClient";
    const commandName = "GetSchemaCreationStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetSchemaCreationStatusRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetSchemaCreationStatusResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetSchemaCreationStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetSchemaCreationStatusCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSchemaCreationStatusCommandOutput> {
    return deserializeAws_restJson1GetSchemaCreationStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
