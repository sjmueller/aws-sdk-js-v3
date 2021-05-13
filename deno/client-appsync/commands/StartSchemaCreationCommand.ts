import { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient.ts";
import { StartSchemaCreationRequest, StartSchemaCreationResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1StartSchemaCreationCommand,
  serializeAws_restJson1StartSchemaCreationCommand,
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

export interface StartSchemaCreationCommandInput extends StartSchemaCreationRequest {}
export interface StartSchemaCreationCommandOutput extends StartSchemaCreationResponse, __MetadataBearer {}

/**
 * <p>Adds a new schema to your GraphQL API.</p>
 *          <p>This operation is asynchronous. Use  to
 *          determine when it has completed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, StartSchemaCreationCommand } from "../../client-appsync/mod.ts";
 * // const { AppSyncClient, StartSchemaCreationCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const command = new StartSchemaCreationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartSchemaCreationCommandInput} for command's `input` shape.
 * @see {@link StartSchemaCreationCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class StartSchemaCreationCommand extends $Command<
  StartSchemaCreationCommandInput,
  StartSchemaCreationCommandOutput,
  AppSyncClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartSchemaCreationCommandInput) {
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
  ): Handler<StartSchemaCreationCommandInput, StartSchemaCreationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppSyncClient";
    const commandName = "StartSchemaCreationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartSchemaCreationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartSchemaCreationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartSchemaCreationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StartSchemaCreationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartSchemaCreationCommandOutput> {
    return deserializeAws_restJson1StartSchemaCreationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
